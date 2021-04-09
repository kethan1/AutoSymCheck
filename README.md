# HealthHacks2021

## AutoSymCheck

- Project Goal - proactive identification of diseases through symptom assesment
- Design
  - Collect Patient Info
    - Derive Medical Conditions from Patient Info
    - Collect Possible Symptoms
    - Predict Possible Diseases
- Development Process 
  - Built Using Python for Server Side, and HTML, CSS, and Javascript for Client Side
- Deployment
  - To run the app locally, make sure you have python installed. Then, clone this repo and run the below commands:
    ```
    pip install -r requirements.txt
    python app.py
    ```
    Depending on your install (MacOS and some Linux Distros), you may need to use `pip3` and `python3`
  - Deploying to Heroku
    - All the needed files are in this repo, look at: https://devcenter.heroku.com/articles/deploying-python
  - Production Demo
    - Application can be accessed online at https://healthhacks2021.herokuapp.com

![ScreenShot](/static/images/Symptom_Checker_Age:Gender-Info.png)

![ScreenShot](Symptom_Checker_Current-Medical-Conditions.png)
