# Import libraries
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
app.config["SECRET_KEY"] = 'themajor'
# Load the model
model = pickle.load(open('model.pkl','rb'))
@app.route('/')
def home():
    return render_template("index.html")

@app.route('/predict', methods = ['POST'])
def predict():
    print(request.data)
    data = json.loads(request.data)
    features  = [int(x) for x in data.values()]
    col = ['RESOURCE','MGR_ID','ROLE_ROLLUP_1','ROLE_ROLLUP_2','ROLE_DEPTNAME','ROLE_TITLE','ROLE_FAMILY_DESC','ROLE_FAMILY']
    df = pd.DataFrame([features] , columns = col)
    res = model.predict(df)
    if(res[0]):
        return "Yes"
    else :
        return "No"
    
if __name__ == '__main__':
    app.run(port=5000, debug=True)