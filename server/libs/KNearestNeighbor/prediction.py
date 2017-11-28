import numpy as np
import pandas as pd
from sklearn.cross_validation import train_test_split
from sklearn.neighbors import KNeighborsClassifier

class Prediction():
    def predict(day, cause_of_fire, lat, lon, state):
        data = pd.read_csv("/app/server/libs/KNearestNeighbor/Fires.csv", sep = ",", header=None)
        X = data.values[:, (1,2,4,5,6)]
        y = data.values[:, 3]

        ######################
        # Data formatting
        ######################
        # Map states to numbers
        X_map = (("AL", 1), ("AK", 2), ("AZ", 3), ("AR", 4), ("CA", 5), ("CO", 6), ("CT", 7), ("DC", 8), ("DE", 9), ("FL", 10), ("GA", 11),
                  ("HI", 12), ("ID", 13), ("IL", 14), ("IN", 15), ("IA", 16), ("KS", 17), ("KY", 18), ("LA", 19), ("ME", 20), ("MD", 21),
                  ("MA", 22), ("MI", 23), ("MN", 24), ("MS", 25), ("MO", 26), ("MT", 27), ("NE", 28), ("NV", 29), ("NH", 30), ("NJ", 31),
                  ("NM", 32), ("NY", 33), ("NC", 34), ("ND", 35), ("OH", 36), ("OK", 37), ("OR", 38), ("PA", 39), ("RI", 40), ("SC", 41),
                  ("SD", 42), ("TN", 43), ("TX", 44), ("UT", 45), ("VT", 46), ("VA", 47), ("WA", 48), ("WV", 49), ("WI", 50), ("WY", 51), ("PR", 52))
        for index, val in enumerate(X):
            for each in X_map:
                if val[4] == each[0]:
                    X[index][4] = each[1]
        # Turn floats to integers
        for index, val in enumerate(X):
            for i, each in enumerate(val):
                val[i] = int(each)
        # Split Data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3, random_state = 100)

        ######################################
        # Create, train and predict classifier
        ######################################
        knn = KNeighborsClassifier(n_neighbors = 5) # 5 is a compromise between time and accuracy
        knn.fit(X_train, y_train)
        size_of_fire = knn.predict([[int(day), int(cause_of_fire), int(lat), int(lon), int(state)]])

        return size_of_fire[0]
