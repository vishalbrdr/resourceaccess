import numpy as np
import pandas as pd
import pickle
from imblearn.over_sampling import SMOTEN
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.model_selection import RandomizedSearchCV
data = pd.read_csv('train.csv')
Y = data['ACTION']
X = data.drop('ACTION', axis = 1)
X = X.drop('ROLE_CODE', axis = 1)
sampler = SMOTEN(random_state=0)
X_smoten, Y_smoten = sampler.fit_resample(X, Y)
X_smoten = pd.DataFrame(X_smoten, columns = ['RESOURCE', 'MGR_ID', 'ROLE_ROLLUP_1', 'ROLE_ROLLUP_2',
       'ROLE_DEPTNAME', 'ROLE_TITLE', 'ROLE_FAMILY_DESC', 'ROLE_FAMILY'])
X_train_smoten, X_test_smoten, Y_train_smoten, Y_test_smoten = train_test_split(X_smoten, Y_smoten, stratify = Y_smoten, test_size = 0.2)
params_xgb={
 "learning_rate"    : [0.05, 0.10, 0.15, 0.20, 0.25, 0.30 ] ,
 "max_depth"        : [ 3, 4, 5, 6, 8, 10, 12, 15],
 "min_child_weight" : [ 1, 3, 5, 7 ],
 "gamma"            : [ 0.0, 0.1, 0.2 , 0.3, 0.4 ],
 "colsample_bytree" : [ 0.3, 0.4, 0.5 , 0.7 ]   
}

xgb = XGBClassifier()
xgb_smoten=RandomizedSearchCV(xgb, param_distributions=params_xgb, n_iter=100, scoring='roc_auc', n_jobs=-1, cv=3, verbose=3)
xgb_smoten.fit(X_train_smoten,Y_train_smoten)
pickle.dump(xgb_smoten, open('model.pkl', 'wb'))