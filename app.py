from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return "hello"

@app.route('/ind')
def home():
    return render_template('index.html')

@app.route('/calculator')
def home():
    return render_template('calc.html')
