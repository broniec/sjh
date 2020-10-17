import io
import re
import requests

# a list of multiple different urls at the comparably website which have many links to company pages
comparably_links = ['https://www.comparably.com/companies/recently-rated']
# comparably_links = ['https://www.comparably.com/companies/recently-rated', 'https://www.comparably.com/companies', 'https://www.comparably.com/companies/recently-rated/all/page/2', 'https://www.comparably.com/companies/recently-rated/all/page/3', 'https://www.comparably.com/companies/recently-rated/all/page/4', 'https://www.comparably.com/companies/recently-rated/all/page/5']
# regex to match for company urls found on the above pages
comparably_regex = 'https://www\.comparably\.com/companies/[A-Za-z-]+'
find_companies = re.compile(comparably_regex)
# regex to find diversity score on web pages
diversity_score_regex = '[0-9]+</span> <span class="numberGrade-total">/ 100</span></div></div><div class="gs-col no-shirnk"><p class="cppCultureGrades-Grades-summaryText">Diversity'
find_diversity_scores = re.compile(diversity_score_regex)
# regex to find the company name
company_name_regex = 'class="companyName"><span itemprop="name">[A-Za-z&; -]+'
find_company_names = re.compile(company_name_regex)

def main():
    for company in get_company_list():
        try:
            save_company_data(company)
            extract_company_data(company)
        except:
            print('skipped \'' + company + '\'')

def get_company_list():
    list_of_companies = []

    for list_link in comparably_links:
        req = requests.request('GET', list_link)
        text = req.text

        list_of_companies.extend(find_companies.findall(text))
    # sort out duplicates
    list_of_companies = list(dict.fromkeys(list_of_companies))
    # remove http and other pieces of url that we don't need
    list_of_companies = [w[37:] for w in list_of_companies]
    return list_of_companies[0:3]

def save_company_data(company_name):
    req = requests.request('GET', 'https://www.comparably.com/companies/' + company_name + '/culture')
    with open('data/' + company_name + '.html', mode='w', encoding='UTF-8', errors='strict', buffering=1) as file:
        file.write(req.text)
        file.close()

def extract_company_data(company_name):
    with open('data/' + company_name + '.html', mode='r', encoding='UTF-8', errors='strict', buffering=1) as file:
        text = file.read()
    score_as_list = [w[0:w.index('<')] for w in find_diversity_scores.findall(text)]
    if len(score_as_list) != 1:
        raise 'We ran into a problem'
    else:
        score = score_as_list[0]
    clean_name_as_list = [w[42:] for w in find_company_names.findall(text)]
    if len(clean_name_as_list) != 1:
        raise 'We ran into a problem'
    else:
        clean_name = clean_name_as_list[0]
    print(company_name + '\t' + clean_name + '\t' + score)

if __name__ == '__main__':
    main()
