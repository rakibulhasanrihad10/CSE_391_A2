const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
    
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()

        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth <1200)
            {
                asideSectionTogglerBtn();
            }
        })

    }

    function removeBackSection()
    {
        for( let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
    
            }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for( let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");

        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open")
            }

        }



// ============= send mail =============
function openMailClient() {
    window.location.href = "mailto:rakibulhasanrihad@gmail.com";
}
// ============= send mail =============





// ============= Last modified date display =============
let lastMod = new Date(document.lastModified);
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Dhaka'
};
let formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(lastMod);
document.getElementById("last-modified").textContent += `${formattedDateTime} (BD Local Time, GMT+6)`;
// ============= Last modified date display =============



// ============= Location =============

document.getElementById("page-url").innerHTML = "Page Location: " + window.location.href;
// document.getElementById("page-location").innerHTML = "Page path: " + window.location.pathname;

// ============= Location =============




// ============= Converter =============

function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const conversionType = document.getElementById("conversionType").value;
    const convertedvalue = document.getElementById("result");

    let result;

    if (conversionType === "lbToKg") {
        result = (inputValue * 0.4536).toFixed(4) + " kilograms";
    } else if (conversionType === "kgToLb") {
        result = (inputValue * 2.2046).toFixed(4) + " pounds";
    } 

    convertedvalue.textContent = result;
}

// ============= Converter =============

// ============= Quote Generator =============
// const randomQuote = [
//     "And whoever puts their trust in Allah, then He will suffice him",
//     "The strongest among you is the one who controls his anger",
//     "Believe in yourself and in the power of Allah, and you will achieve greatness",
//     "In three words I can sum up everything I have learned about life: it goes on",
//     "We all need people who will give us feedback. That's how we improve",
//     "It is better to be hated for what you are than to be loved for what you are not",
// ];

const randomQuote = [
    {
        quote: "And whoever puts their trust in Allah, then He will suffice him",
        author: "― Quran 65:3"
    },
    {
        quote: "The strongest among you is the one who controls his anger",
        author: "― Prophet Muhammad ﷺ "
    },
    {
        quote: "Believe in yourself and in the power of Allah, and you will achieve greatness",
        author: "― Prophet Muhammad ﷺ "
    },
    {
        quote: "In three words I can sum up everything I have learned about life: it goes on",
        author: "― Robert Frost"
    },
    {
        quote: "We all need people who will give us feedback. That's how we improve",
        author: "― Bill Gates"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not",
        author: "― Andre Gide"
    }
];

const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const button = document.querySelector("#gqbutton");


function autoQuote(){
    const quoteIndex = Math.floor(Math.random() * randomQuote.length);
    console.log(quoteIndex);
    quoteElement.textContent = randomQuote[quoteIndex].quote;
    authorElement.textContent = randomQuote[quoteIndex].author;
}
autoQuote();

gqbutton.addEventListener('click', autoQuote);
    


// ============= Quote Generator =============


// ============= Math Tools =============

function analyzeNumbers() {
    const input = document.getElementById('numberInput').value;
    // Split the input into an array of strings
    const items = input.split(',');
    const numbers = [];

    // Manually validate each item
    for (let i = 0; i < items.length; i++) {
        const trimmedItem = items[i].trim(); // Remove extra spaces
        if (!isNaN(trimmedItem) && trimmedItem !== '') {
            numbers.push(Number(trimmedItem)); // Add valid numbers to the array
        }
    }

    // If no valid numbers are provided
    if (numbers.length === 0) {
        document.getElementById('maxValue').textContent = '';
        document.getElementById('minValue').textContent = '';
        document.getElementById('sumValue').textContent = '';
        document.getElementById('averageValue').textContent = '';
        document.getElementById('reverseOrder').textContent = '';
        return;
    }

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = sum / numbers.length;
    const reverseOrder = numbers.reverse().join(', ');

    document.getElementById('maxValue').textContent = max;
    document.getElementById('minValue').textContent = min;
    document.getElementById('sumValue').textContent = sum;
    document.getElementById('averageValue').textContent = average.toFixed(2);
    document.getElementById('reverseOrder').textContent = reverseOrder;
}

// ============= Math Tools =============


// ============= Magic Box =============

const textArea = document.getElementById('text-area');

    // Clear
    document.getElementById('clear-it').addEventListener('click', () => {
      textArea.value = '';
    });

    // Upper Lower
    let isUpperCase = false;
    document.getElementById('capitalize').addEventListener('click', () => {
        const lines = textArea.value.split('\n'); 
        if (isUpperCase) {
          
          textArea.value = lines.map(line => line.toLowerCase()).join('\n');
        } else {
          
          textArea.value = lines.map(line => line.toUpperCase()).join('\n');
        }
        isUpperCase = !isUpperCase; 
      });
      

    // Sort
    document.getElementById('sort').addEventListener('click', () => {
      const lines = textArea.value.split('\n');
      textArea.value = lines.sort((a, b) => {
        if (a > b) return 1;   
        if (a < b) return -1;  
        return 0;              
      }).join('\n');           
    });

    // Reverse
    document.getElementById('reverse').addEventListener('click', () => {
        const lines = textArea.value.split('\n');
        textArea.value = lines
          .map(line => line.split('').reverse().join('')) 
          .reverse()                                     
          .join('\n');                                   
      });
      

    // Strip Blank
    document.getElementById('strip-blank').addEventListener('click', () => {
      const lines = textArea.value.split('\n');
      textArea.value = lines
        .map(line => line.trim())
        .filter(line => line !== '')
        .join('\n');
    });

    // Add Numbers
    document.getElementById('add-numbers').addEventListener('click', () => {
      const lines = textArea.value.split('\n');
      textArea.value = lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
    });

    // Shuffle
    document.getElementById('shuffle').addEventListener('click', () => {
      const lines = textArea.value.split('\n');
      for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
      }
      textArea.value = lines.join('\n');
    });



// ============= Magic Box =============


