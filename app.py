from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def start():
    return render_template('index.html')

@app.route("/calc")
def calc():
    return render_template('calc.html')

