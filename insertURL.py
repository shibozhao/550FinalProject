import mysql.connector
from os import listdir
from bs4 import BeautifulSoup
'''
credit:
https://pynative.com/python-mysql-blob-insert-retrieve-file-image-as-a-blob-in-mysql/
'''


def writeToSql(path, host, database, user, password):
    try:
        # connect to database
        connection = mysql.connector.connect(
            host=host,
            database=database,
            user=user,
            password=password
        )
        cursor = connection.cursor()
        lst = listdir(path)
        # loop through folder
        for folder in lst:
            folder_path = path + '/' + folder
            pic_lst = listdir(folder_path)
            for pic in pic_lst:
                pic_path = folder_path + '/' + pic
                with open(pic_path, 'r') as file:
                    #generate url
                    parsed_html = BeautifulSoup(file, "html.parser")
                    file_name = parsed_html.find('filename').text
                    width = int(parsed_html.find('width').text)
                    height = int(parsed_html.find('height').text)
                    breed = parsed_html.find('name').text
                    url = f'https://raw.githubusercontent.com/shibozhao/550FinalProject/main/Images/{folder}/{pic}.jpg'
                    insert_query = f"INSERT INTO Dog_Pic VALUES('{file_name}', '{breed}', {width}, {height}, '{url}')"
                    cursor.execute(insert_query, multi=False)

    except mysql.connector.Error as error:
        print('Failed to read data from mySQL {}'.format(error))

    finally:
        if connection.is_connected():
            connection.commit()
            cursor.close()
            connection.close()





if __name__ == '__main__':
    host = 'dogbreeds.c7ofdgjgfx9s.us-east-2.rds.amazonaws.com',
    database = 'DogBreeds',
    user = 'admin',
    password = 'weakpassword'
    path = '/Users/bozou/Documents/550FinalProject/550FinalProject/Annotation'
    writeToSql(path, host, database, user, password)
    print('done')







