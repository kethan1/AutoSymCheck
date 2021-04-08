globalThis.currentSymptoms = []
globalThis.globalPageNum = 1;
globalThis.gender = "male"
globalThis.age = 18
globalThis.otherInfo = {
    "overweight": null,
    "cigarettes": null,
    "injury": null,
    "cholesterol": null,
    "hypertension": null,
    "diabetes": null
}
globalThis.patientQuestions = {}
    
function detectColorScheme() {
    const htmlTag = document.getElementsByTagName("html")[0];
    var systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark": "light";
    var appTheme = localStorage.getItem("settings.theme");
    if (appTheme === null || appTheme === "system") {
        if (appTheme === null) {
            localStorage.setItem("settings.theme", "system")
        }
        htmlTag.setAttribute("data-theme", systemDarkMode);
    } else {
        htmlTag.setAttribute("data-theme", appTheme);
    }
}
detectColorScheme();

function ChangeTheme(newTheme) {
    localStorage.setItem("settings.theme", newTheme);
    detectColorScheme();
}

function GetTheme() {
    var appTheme = localStorage.getItem("settings.theme");
    if (appTheme === undefined) {
        localStorage.setItem("settings.theme", "system")
        return "system";
    }
    return appTheme;
}
