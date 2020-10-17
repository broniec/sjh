import io
import re
import requests

def main():
    try:
        save_company_data()
    except:
        print('skipped')

def save_company_data():
    req = requests.request('GET', 'https://www.indeed.com/cmp/Johnson-&-Johnson/salaries')
    with open('test.html', mode='w', encoding='UTF-8', errors='strict', buffering=1) as file:
        file.write(req.text)
        file.close()

if __name__ == '__main__':
    main()
