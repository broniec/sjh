import io
import re
import requests

# a list of multiple different urls at the comparably website which have many links to company pages
comparably_links = ['https://www.comparably.com/companies/recently-rated', 'https://www.comparably.com/companies', 'https://www.comparably.com/companies/recently-rated/all/page/2', 'https://www.comparably.com/companies/recently-rated/all/page/3', 'https://www.comparably.com/companies/recently-rated/all/page/4', 'https://www.comparably.com/companies/recently-rated/all/page/5']
# regex to match for company urls found on the above pages
comparably_regex = 'https://www\.comparably\.com/companies/[A-Za-z-]+'

def main():
    for company in get_company_list():
        try:
            save_company_data(company)
        except err:
            print('skipped \'' + company + '\'')

def get_company_list():
    list_of_companies = []

    for list_link in comparably_links:
        req = requests.request('GET', list_link)
        text = req.text

        find_companies = re.compile(comparably_regex)
        list_of_companies.extend(find_companies.findall(text))
    # sort out duplicates
    list_of_companies = list(dict.fromkeys(list_of_companies))
    # remove http and other pieces of url that we don't need
    list_of_companies = [w[37:] for w in list_of_companies]
    print(len(list_of_companies))
    raise 'quit early'
    return list_of_companies

def save_company_data(company_name):
    req = requests.request('GET', 'https://www.comparably.com/companies/' + company_name + '/diversity')
    with open('data/' + company_name + '.html', mode='w', encoding='UTF-8', errors='strict', buffering=1) as file:
        file.write(req.text)
        file.close()

if __name__ == '__main__':
    main()
