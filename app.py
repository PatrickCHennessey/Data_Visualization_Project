from flask import Flask, render_template, redirect, url_for
import pymongo
import json


# create instance of Flask app
app = Flask(__name__)

# create route that renders index.html template
@app.route("/")
def index():
    """Main/default path that serves index.html from the templates folder"""

    return render_template('index.html')

    '''
    XXXXX SAMPLE CODE FROM PAST PROJECT XXXXXX
    # Connect to MongoDB connection/collection
    myclient = pymongo.MongoClient("mongodb://localhost:27017/") # Connects to MONGO
    mydb = myclient["mars_db"]  # Connects to a specific database in MONGO
    mycol = mydb["mars_dictionary"] # Accesses a specific collection/table within the database in MONGO

    print("Records in collection: ", mycol.count_documents({}))

    # Retrieve the dictionary record
    results_dict = mycol.find_one() # retrieve everything in the collection

    # Have Flask serve the index.html template file, passing data from the dictionary to the file;
    return render_template('index.html', results=results_dict)
    '''


@app.route("/create_db")
def create_db():

    # load the source data (genre_year.json)

    # CHANGE TO CSV SOURCE XXXXXXXX
    with open("genre_year_df.json","r") as fp:
        json_data = json.load(fp)

    # print(json_data)  # to test if json_data prints into terminal
    

    # parse it (genre_year.json) so that I grab only the year from the data
    

    # store in MongoDB (genre_year.json)
    # What will be the structure of the table/collection in MongoDB (for each record)
    # Suggestion: Use the headings from the source csv
    # Headings from genre_year_df.csv: Year,top_genre,Peak Position,Danceability,Duration,Energy,Liveness,Loudness,Mode,Popularity,Tempo,Valence 


    return "<p>Create DB route/process completed</p>"



@app.route("/api")
def api():

    # receive a search query from the website (js-fetch)

    # search Mongo DB for all records matching the year

    # return matching records to js-fetch for processing by the JS on the web site

    return "<p>Api request detected</p>" # Remove later

'''
@app.route("/scrape")
def scrape_route():

    print("Starting the scrape process")
    from scrape_mars import scrape
    my_dict = scrape()
    
    # Get python to connect to existing mongoDB
    # store my_dict in MongoDB

    print("Scrape process complete.")
    print(my_dict)
    print("Storing dictionary in MongoDB.")
    # Create MongoDB connection/collection
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["mars_db"]  
    mycol = mydb["mars_dictionary"]
    # clear any old data from the collection
    mycol.delete_many({})
    # insert scraped dictionary
    x = mycol.insert_one(my_dict)
    the_id = x.inserted_id # get id of inserted record (optional)

    print("Created record ID: ", the_id)

    #return "<h1>Process Complete</h1>"
    
    return redirect(url_for('index'))
'''



if __name__ == "__main__":
    app.run(debug=True)