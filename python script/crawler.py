from bs4 import BeautifulSoup
import requests
from flask import Flask,request
import json
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def hello_world():
    return 'Hello'


@app.route('/news',methods = ['POST', 'GET'])
@cross_origin()
def getNews():
	if request.method == 'GET':
		source_code = requests.get("https://www.cricbuzz.com/")
		plain_text = source_code.text
		soup = BeautifulSoup(plain_text, "html.parser")

		newsData = soup.findAll('a', {'class': 'cb-nws-hdln-ancr text-hvr-underline'})
		allData=[]
		for k in newsData:
			print(k)
			obj={}
			href = k.get('href')
			title = k.get('title')
			obj['href'] = 'https://www.cricbuzz.com'+href
			obj['title'] = title
			allData.append(obj)

		return json.dumps(allData)

	else:
		return "from post"


if __name__ == '__main__':
   app.run(host='127.0.0.1')
