// Global list of destinations
const DESTINATIONS = [{'id': 1, 'name': 'France', 'safety_rating': 'Moderate', 'infra_index': 4, 'av_temp': 12.44, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'French', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 2, 'name': 'Spain', 'safety_rating': 'High', 'infra_index': 3.84, 'av_temp': 16.61, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Spanish, Catalan, Galician, Basque', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 3, 'name': 'United States', 'safety_rating': 'Moderate', 'infra_index': 4.05, 'av_temp': 12.64, 'continent': 'North America', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'English, Spanish', 'food': 'Sweet ', 'cov_restrict': 'Amber'}, {'id': 4, 'name': 'China', 'safety_rating': 'High', 'infra_index': 3.75, 'av_temp': 14.62, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Mandarin', 'food': 'Spicy', 'cov_restrict': 'Red'}, {'id': 5, 'name': 'Italy', 'safety_rating': 'Moderate', 'infra_index': 3.85, 'av_temp': 14.47, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'Italian, German, French, Slovene', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 6, 'name': 'Turkey', 'safety_rating': 'High', 'infra_index': 3.21, 'av_temp': 14.96, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Turkish, Kurdish', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 7, 'name': 'Mexico', 'safety_rating': 'Moderate', 'infra_index': 2.85, 'av_temp': 22.03, 'continent': 'North America', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Spanish', 'food': 'Spicy', 'cov_restrict': 'Green'}, {'id': 8, 'name': 'Thailand', 'safety_rating': 'High', 'infra_index': 3.14, 'av_temp': 28.64, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Low', 'languages_spoken': 'Thai, Chinese, English', 'food': 'Spicy', 'cov_restrict': 'Green'}, {'id': 9, 'name': 'Germany', 'safety_rating': 'High', 'infra_index': 4.37, 'av_temp': 10.68, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'German', 'food': '', 'cov_restrict': 'Green'}, {'id': 10, 'name': 'United Kingdom', 'safety_rating': 'Moderate', 'infra_index': 4.03, 'av_temp': 10.75, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'English, Welsh, Scots Gaelic', 'food': '', 'cov_restrict': 'Green'}, {'id': 11, 'name': 'Japan', 'safety_rating': 'High', 'infra_index': 4.25, 'av_temp': 15.19, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Japanese', 'food': '', 'cov_restrict': 'Green'}, {'id': 12, 'name': 'Austria', 'safety_rating': 'High', 'infra_index': 4.18, 'av_temp': 8.82, 'continent': 'Europe', 'features': 'City, Mountains, Forest, World Heritage Sites ', 'budget': 'Medium', 'languages_spoken': 'German, Slovene, Croatian, Hungarian', 'food': '', 'cov_restrict': 'Green'}, {'id': 13, 'name': 'Greece', 'safety_rating': 'Moderate', 'infra_index': 3.17, 'av_temp': 17.02, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Greek, English, French', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 14, 'name': 'Malaysia', 'safety_rating': 'Moderate', 'infra_index': 3.15, 'av_temp': 28.28, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Low', 'languages_spoken': 'Malay, Chinese, Tamil, English', 'food': 'Spicy', 'cov_restrict': 'Green'}, {'id': 15, 'name': 'Portugal', 'safety_rating': 'High', 'infra_index': 3.25, 'av_temp': 16.81, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Portuguese', 'food': '', 'cov_restrict': 'Green'}, {'id': 16, 'name': 'Russia', 'safety_rating': 'High', 'infra_index': 2.78, 'av_temp': 5.27, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Russian', 'food': '', 'cov_restrict': 'Green'}, {'id': 17, 'name': 'Hong Kong', 'safety_rating': 'High', 'infra_index': 3.97, 'av_temp': 24.11, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Medium', 'languages_spoken': 'Cantonese, Mandarin', 'food': '', 'cov_restrict': 'Red'}, {'id': 18, 'name': 'Poland', 'safety_rating': 'High', 'infra_index': 3.21, 'av_temp': 10.6, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Polish', 'food': '', 'cov_restrict': 'Green'}, {'id': 19, 'name': 'Canada', 'safety_rating': 'Moderate', 'infra_index': 3.75, 'av_temp': 2.09, 'continent': 'North America', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'English, French', 'food': '', 'cov_restrict': 'Green'}, {'id': 20, 'name': 'Netherlands', 'safety_rating': 'High', 'infra_index': 4.21, 'av_temp': 11.59, 'continent': 'Europe', 'features': 'Beach, City, Forest, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'Dutch, Frisian', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 21, 'name': 'Vietnam', 'safety_rating': 'Moderate', 'infra_index': 3.01, 'av_temp': 26.25, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Low', 'languages_spoken': 'Vietnamese, French, English, Khmer, Chinese', 'food': 'Spicy', 'cov_restrict': 'Green'}, {'id': 22, 'name': 'India', 'safety_rating': 'Moderate', 'infra_index': 2.91, 'av_temp': 25.97, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Hindi, English, Bengali, Gujarati, Kashmiri, Malayalam, Marathi, Oriya, Punjabi, Tamil, Telugu, Urdu, Kannada, Assamese, Sanskrit, Sindhi', 'food': 'Spicy', 'cov_restrict': 'Green'}, {'id': 23, 'name': 'South Korea', 'safety_rating': 'High', 'infra_index': 3.73, 'av_temp': 13.6, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Korean', 'food': 'Spicy', 'cov_restrict': 'Green'}, {'id': 24, 'name': 'Croatia', 'safety_rating': 'High', 'infra_index': 3.01, 'av_temp': 13.5, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Bosnian, Croatian, Serbian, Italian, Hungarian, Czech, Slovak, German', 'food': '', 'cov_restrict': 'Green'}, {'id': 25, 'name': 'Hungary', 'safety_rating': 'High', 'infra_index': 3.27, 'av_temp': 13.04, 'continent': 'Europe', 'features': 'City, Mountains, Forest', 'budget': 'Low', 'languages_spoken': 'Hungarian, Magyar', 'food': '', 'cov_restrict': 'Green'}, {'id': 26, 'name': 'United Arab Emirates', 'safety_rating': 'High', 'infra_index': 4.02, 'av_temp': 29.78, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Desert', 'budget': 'Medium', 'languages_spoken': 'Arabic, English', 'food': '', 'cov_restrict': 'Green'}, {'id': 27, 'name': 'Indonesia', 'safety_rating': 'Moderate', 'infra_index': 2.89, 'av_temp': 27.11, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Low', 'languages_spoken': 'Bahasa, Indonesian, English, Dutch, Javanese', 'food': 'Spicy', 'cov_restrict': 'Green'}, {'id': 28, 'name': 'Singapore', 'safety_rating': 'High', 'infra_index': 4.06, 'av_temp': 25.1, 'continent': 'Asia', 'features': 'Beach, City', 'budget': 'Medium', 'languages_spoken': 'Malay, Mandarin, Tamil, English', 'food': '', 'cov_restrict': 'Amber'}, {'id': 29, 'name': 'Czech Republic', 'safety_rating': 'High', 'infra_index': 3.46, 'av_temp': 10.07, 'continent': 'Europe', 'features': 'City, Mountains, Forest, World Heritage Sites ', 'budget': 'Low', 'languages_spoken': 'Czech', 'food': '', 'cov_restrict': 'Green'}, {'id': 30, 'name': 'Saudi Arabia', 'safety_rating': 'High', 'infra_index': 3.11, 'av_temp': 27.01, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Desert', 'budget': 'Low', 'languages_spoken': 'Arabic, English', 'food': '', 'cov_restrict': 'Green'}, {'id': 31, 'name': 'Denmark', 'safety_rating': 'High', 'infra_index': 3.96, 'av_temp': 9.89, 'continent': 'Europe', 'features': 'Beach, City, Forest, World Heritage Sites', 'budget': 'High', 'languages_spoken': 'Danish, Faeroese, Greenlandic, German, English', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 32, 'name': 'Morocco', 'safety_rating': 'Moderate', 'infra_index': 2.43, 'av_temp': 21.46, 'continent': 'Africa', 'features': 'Beach, City, Forest, Desert', 'budget': 'Low', 'languages_spoken': 'Arabic, French, Spanish', 'food': '', 'cov_restrict': 'Green'}, {'id': 33, 'name': 'Taiwan', 'safety_rating': 'High', 'infra_index': 3.72, 'av_temp': 24.43, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Low', 'languages_spoken': 'Mandarin ', 'food': '', 'cov_restrict': 'Red'}, {'id': 34, 'name': 'Switzerland', 'safety_rating': 'High', 'infra_index': 4.02, 'av_temp': 9.1, 'continent': 'Europe', 'features': 'City, Mountains, Forest, World Heritage Sites ', 'budget': 'High', 'languages_spoken': 'German, French, Italian, Romansch', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 35, 'name': 'Egypt', 'safety_rating': 'Moderate', 'infra_index': 2.82, 'av_temp': 24.9, 'continent': 'Africa', 'features': 'Beach, City, Mountains', 'budget': 'Low', 'languages_spoken': 'Arabic, English, French', 'food': '', 'cov_restrict': 'Green'}, {'id': 36, 'name': 'Ireland', 'safety_rating': 'Moderate', 'infra_index': 3.29, 'av_temp': 10.1, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Medium', 'languages_spoken': 'English', 'food': '', 'cov_restrict': 'Green'}, {'id': 37, 'name': 'South Africa', 'safety_rating': 'Moderate', 'infra_index': 3.19, 'av_temp': 21.22, 'continent': 'Africa', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Xhosa, Zulu, English, Afrikaans, Ndebele, Sesotho sa Leboa, Sesotho, Swati, Xitsonga, Setswana, Tshivenda', 'food': 'Spicy', 'cov_restrict': 'Green'}, {'id': 38, 'name': 'Australia', 'safety_rating': 'Moderate', 'infra_index': 3.97, 'av_temp': 20.37, 'continent': 'Australasia', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'English', 'food': '', 'cov_restrict': 'Green'}, {'id': 39, 'name': 'Tunisia', 'safety_rating': 'Moderate', 'infra_index': 2.1, 'av_temp': 21.09, 'continent': 'Africa', 'features': 'Beach, City, Mountains, Forest, Desert', 'budget': 'Low', 'languages_spoken': 'Arabic, French', 'food': '', 'cov_restrict': 'Green'}, {'id': 40, 'name': 'Belgium', 'safety_rating': 'Moderate', 'infra_index': 3.98, 'av_temp': 11.41, 'continent': 'Europe', 'features': 'Beach, City, Forest, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'Dutch, French', 'food': 'Sweet', 'cov_restrict': 'Green'}, {'id': 41, 'name': 'Bulgaria', 'safety_rating': 'High', 'infra_index': 2.76, 'av_temp': 13.4, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Bulgarian', 'food': '', 'cov_restrict': 'Green'}, {'id': 42, 'name': 'Philippines', 'safety_rating': 'Moderate', 'infra_index': 2.73, 'av_temp': 27.22, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Low', 'languages_spoken': 'Filipino, English, Spanish', 'food': '', 'cov_restrict': 'Amber'}, {'id': 43, 'name': 'Argentina', 'safety_rating': 'Moderate', 'infra_index': 2.77, 'av_temp': 18.24, 'continent': 'South America', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Spanish, English, Italian, German, French', 'food': '', 'cov_restrict': 'Green'}, {'id': 44, 'name': 'Sweden', 'safety_rating': 'Moderate', 'infra_index': 4.24, 'av_temp': 7.25, 'continent': 'Europe', 'features': 'Beach, City, Mountains, Forest, World Heritage Sites', 'budget': 'Medium', 'languages_spoken': 'Swedish', 'food': '', 'cov_restrict': 'Green'}, {'id': 45, 'name': 'Iran', 'safety_rating': 'Moderate', 'infra_index': 2.77, 'av_temp': 18.43, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest, Desert, World Heritage Sites', 'budget': 'Low', 'languages_spoken': 'Farsi, Azari, Kurdish, Arabic', 'food': '', 'cov_restrict': 'Amber'}, {'id': 46, 'name': 'Kyrgyzstan', 'safety_rating': 'Moderate', 'infra_index': 2.38, 'av_temp': 9.61, 'continent': 'Asia', 'features': 'Beach, City, Mountains Forest, Desert', 'budget': 'Low', 'languages_spoken': 'Kyrgyz, Russian', 'food': '', 'cov_restrict': 'Green'}, {'id': 47, 'name': 'Uzbekistan', 'safety_rating': 'High', 'infra_index': 2.57, 'av_temp': 17.67, 'continent': 'Asia', 'features': 'City, Mountains, Forest, Desert', 'budget': 'Low', 'languages_spoken': 'Uzbek, Russian, Tajik', 'food': '', 'cov_restrict': 'Green'}, {'id': 48, 'name': 'Cambodia', 'safety_rating': 'Moderate', 'infra_index': 2.14, 'av_temp': 28.97, 'continent': 'Asia', 'features': 'Beach, City, Mountains, Forest', 'budget': 'Low', 'languages_spoken': 'Khmer, French, English', 'food': '', 'cov_restrict': 'Green'}]


document.addEventListener("DOMContentLoaded", function() {

    // Hide page loader icon on page load with 1 second delay
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector(".page-loader").style.display = "none"; 
        }, "1500");
    });

    // Display home section
    window.scrollTo(0, 0);
    document.querySelector("#home").style.display = "block";
    document.querySelector("#checker").style.display = "none";
    document.querySelector("#result").style.display = "none";
    document.querySelector("#apology").style.display = "none";

    // When main logo is clicked, return to homepage
    document.querySelector("#logo").addEventListener("click", function() {
        window.scrollTo(0, 0);
        window.location = "/";
    });

    // When run checker button is clicked, display checker form
    let checkerBtn = document.querySelector("#go-to-checker");
    checkerBtn.addEventListener("click", function() {
            window.scrollTo(0, 0);
            document.querySelector("#home").style.display = "none";
            document.querySelector("#checker").style.display = "block";
            document.querySelector("#result").style.display = "none";
            document.querySelector("#apology").style.display = "none";
    } )

    //  
    let question = document.querySelector(".question");
    question.addEventListener("click", function() {
        document.querySelector("#more-info").innerHTML = `
            <p>The Preference Checker asks 10 simple questions and checks your stated preferences against a database of the 50 most visited countries for tourism, matching you with destinations based on the type of holiday you're looking for, food and language preferences and other key factors. When you submit the short survey you will receive a recommended destination and two alternative suggestions.</p> 
            <br>
            <hr> 
            <br>
            <p>Enjoy the app!</p>
        `;
    });

    // When checker form is submitted, display result
    document.querySelector("#checker-form").onsubmit = function () {
        window.scrollTo(0, 0);
        findMyDestination();
        return false;
    }
});

function findMyDestination() {

    // Set all destinations to active with 0 score
    for (let destination of DESTINATIONS) {
        destination.status = "ACTIVE";
        destination.score = 0;
    }

    // Survey question 1: add score to destinations with specified features
    let userFeatures = []
    var checkboxes = document.querySelectorAll(".features:checked");
    for (let checkbox of checkboxes) {
        userFeatures.push(checkbox.value);
    }
    for (let feature of userFeatures) {
        for (let destination of DESTINATIONS) {
            if (destination.features.includes(feature)) {
                destination.score ++;
            }
        }
    }
    
    // Survey question 2: add a point to destinations if average tempature meets user preference
    let userTemp = document.querySelector(".temp:checked").value;
    if (userTemp == "less10") {
        for (destination of DESTINATIONS) {
            if (destination.av_temp < 10) {
                destination.score ++;
            }
        }
    } else if (userTemp == "10to20") {
        for (destination of DESTINATIONS) {
            if (destination.av_temp >= 10 && destination.av_temp <= 20) {
                destination.score ++;
            }
        }
    } else if (userTemp == "20to30") {
        for (destination of DESTINATIONS) {
            if (destination.av_temp > 20) {
                destination.score ++;
            }
        }
    }
    
    // Survey question 3: exclude destinations where budget is higher than specified
    let userBudget = document.querySelector(".budget:checked").value;
    if (userBudget == "low-budget") {
        for (destination of DESTINATIONS) {
            if (destination.budget == "Medium" || destination.budget == "High") {
                destination.status = "ELIMINATED";
            }
        }
    } else if (userBudget == "med-budget") {
        for (destination of DESTINATIONS) {
            if (destination.budget == "High") {
                destination.status = "ELIMINATED";
            }
        }
    }

    // Survey question 4: eliminate destinations with lower than specified safety rating
    let userSafety = document.querySelector(".safety:checked").value;
    if (userSafety == "high-safety") {
        for (destination of DESTINATIONS) {
            if (destination.safety_rating == "Moderate") {
                destination.status = "ELIMINATED";
            }
        }
    }

    // Survey question 5: add points to countries with infrastructure ratings 3+ if user specifies as important
    let userInfra = document.querySelector(".infrastructure:checked").value;
    if (userInfra == "more-important") {
        for (destination of DESTINATIONS) {
            if (destination.infra_index >= 3) {
                destination.score ++;
            }
        }
    }

    // Survey question 6: add point if specified language spoken
    let userLanguage = document.querySelector("#language").value;
    if (userLanguage.length != 0) {
        for (destination of DESTINATIONS) {
            if (destination.languages_spoken.includes(userLanguage)) {
                destination.score ++;
            }
        }
    }

    // Survey question 7: add points to destinations if they meet user's food preferences
    let userFood = []
    var foodCheckboxes = document.querySelectorAll(".food:checked");
    for (let foodCheckbox of foodCheckboxes) {
        userFood.push(foodCheckbox.value);
    }
    if (userFood == "spicy") {
        for (destination of DESTINATIONS) {
            if (destination.food == "Spicy") {
                destination.score ++;
            }
        }
    } else if (userFood == "sweet") {
        for (destination of DESTINATIONS) {
            if (destination.food == "Sweet") {
                destination.score ++;
            }
        }
    } 

    // Survey question 8: eliminate destinations on continents to which the user is not prepared to travel
    let userContinents = []
    var continentCheckboxes = document.querySelectorAll(".continents:checked");
    for (let continentCheckbox of continentCheckboxes) {
        userContinents.push(continentCheckbox.value);
    }

    const possibleContinents = ["Europe", "Asia", "North America", "Africa", "South America", "Australasia"]

    for (let continent of possibleContinents) {
        if (!userContinents.includes(continent)) {
            for (destination of DESTINATIONS) {
                if (destination.continent == continent) {
                    destination.status = "ELIMINATED";
                }
            }
        }
    }

    // Survey question 9: eliminate destinations with covid restrictions if specified
    let userCovRestrict = document.querySelector(".cov-restrict:checked").value;
    if (userCovRestrict == "prefer-low-no") {
        for (destination of DESTINATIONS) {
            if (destination.cov_restrict == "Amber" || destination.cov_restrict == "Red") {
                destination.status = "ELIMINATED";
            }
        }
    }

    // Survey question 10: if a destination is specified as no-go, remove from active list
    let noGoDest = document.querySelector("#no-go-dest").value;
    if (noGoDest.length != 0) {
        for (destination of DESTINATIONS) {
            if (destination.name == noGoDest) {
                destination.status = "ELIMINATED";
            }
        }
    }
     
    // Identify recommended destination and runners-up
    topScore = 0
    TOP_DESTINATIONS = []

    for (destination of DESTINATIONS) {
        if (destination.score > topScore) {
            topScore = destination.score;
        }
    }
    for (destination of DESTINATIONS) {
        if (destination.status == "ACTIVE") {
            if (destination.score == topScore) {
                TOP_DESTINATIONS.push(destination);
            }
        }
    }
    for (destination of DESTINATIONS) {
        if (destination.status == "ACTIVE") {
            if (destination.score == topScore - 1) {
                TOP_DESTINATIONS.push(destination);
            }
        }
    }
    for (destination of DESTINATIONS) {
        if (destination.status == "ACTIVE") {
            if (destination.score == topScore - 2) {
                TOP_DESTINATIONS.push(destination);
            }
        }
    }
    
    // Return highest scoring destinations and redirect to result page
    console.log(TOP_DESTINATIONS);
    if (TOP_DESTINATIONS.length >= 3) {
        let flag = document.querySelector("#flag");
        flag.src=`/assets/flags/${TOP_DESTINATIONS[0].name}.png`;
        document.querySelector("#top-destination").innerHTML = `${TOP_DESTINATIONS[0].name}`;
        document.querySelector("#runner-up-one").innerHTML = `${TOP_DESTINATIONS[1].name}`;
        document.querySelector("#runner-up-two").innerHTML = `${TOP_DESTINATIONS[2].name}`;
        document.querySelector("#home").style.display = "none";
        document.querySelector("#checker").style.display = "none";
        document.querySelector("#result").style.display = "block";
        document.querySelector("#apology").style.display = "none";
        window.scrollTo(0, 0);
    } else {
        document.querySelector("#home").style.display = "none";
        document.querySelector("#checker").style.display = "none";
        document.querySelector("#result").style.display = "none";
        document.querySelector("#apology").style.display = "block";
        window.scrollTo(0, 0);
    }
    return false;
}
