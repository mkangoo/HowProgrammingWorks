import sys
from bs4 import BeautifulSoup
import requests

url = "https://my.guu.ru/student/classes"

try:
    response = requests.get(url)
    response.raise_for_status()  # Проверка наличия ошибок в запросе

    # Передаем HTML-код страницы в BeautifulSoup
    soup = BeautifulSoup(response.text, 'lxml')

    # Открываем файл для записи (если файл не существует, он будет создан)
    with open('output.html', 'w', encoding='utf-8') as f:
        # Перенаправляем стандартный вывод в файл
        original_stdout = sys.stdout
        sys.stdout = f

        try:
            # Выводим красиво отформатированный HTML
            print(soup.prettify())
        finally:
            # Восстанавливаем стандартный вывод
            sys.stdout = original_stdout

except requests.exceptions.RequestException as e:
    print(f"Ошибка при запросе: {e}")
