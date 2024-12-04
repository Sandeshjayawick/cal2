
        const months = [
        {
                name: "2025",
                image: "images/1.png",
                
                
            },
            {
                name: "January",
                image: "images/2.png",
                specialDays: [
                    { date: "25", description: " International Day of Education ", link:"https://www.un.org/en/observances/education-day" },
                    { date: "28", description: " International data privacy day " },
                    
                ]
            },
            {
                name: "February",
                image: "images/3.png",
                
                
            },
            {
                name: "March",
                image: "images/4.png",
                specialDays: [
                    { date: "08", description: "International Women's Day",link:"https://www.un.org/en/observances/womens-day" },
                    { date: "31", description: "World Backup Day" }
                    
                    
                ]
            },
            {
                name: "April",
                image: "images/5.png",
                specialDays: [
                    { date: "24", description: "International Girls in ICT Day", link:"https://www.itu.int/women-and-girls/girls-in-ict/" },
                ]
            },
            {
                name: "May",
                image: "images/6.png",
                specialDays: [
                    { date: "11", description: "Mothers Day" },
                    { date: "17", description: "World Telecommunication and Information Society Day", link:"https://www.un.org/en/observances/telecommunication-day" },
                    { date: "17", description: "World Internet Day" },

                
                    
                ]
            },
            {
                name: "June",
                image: "images/7.png",
                specialDays: [
                    { date: "15", description: "Fathers Day" },
                    { date: "27", description: " Micro, Small and Medium-sized Enterprises Day",link:"https://www.un.org/en/observances/micro-small-medium-businesses-day" },
                    { date: "30", description: "Social Media Day" },
                    
                ]
            },
            {
                name: "July",
                image: "images/8.png",
                specialDays: [
                    { date: "15th", description: "World Youth Skills Day (UN) ",
                        link: "https://www.un.org/en/observances/world-youth-skills-day"
                    },

                    { date: "16th", description: "World AI Day"},
                    
                ]
            },
            {
                name: "August",
                image: "images/9.png",
                specialDays: [
                    { date: "1", description: "World Wide Web Day" },
                    { date: "12", description: "International Youth day",link:"https://www.un.org/en/observances/youth-day" }
                ]
            },
            {
                name: "September",
                image: "images/10.png",
                specialDays: [
                    { date: "28", description: " International Day for Universal Access to Information",link:'https://www.un.org/en/observances/information-access-day' }
                ]
            },
            {
                name: "October",
                image: "images/11.png",
                specialDays: [
                    { date: "1", description: "National Cybersecurity Awareness Month" },
                    { date: "1", description: "Childrens Day"},
                    { date: "5", description: "Teachers Day" ,link:"https://www.unesco.org/en/days/teachers"},
                    { date: "11", description: "International Day of the Girl Child" ,link:"https://www.un.org/en/observances/girl-child-day"},
                    { date: "24", description: "Teachers DayWorld Development Information Day" ,link:"https://www.un.org/en/observances/development-information-day"},
                    
                ]
            },
            {
                name: "November",
                image: "images/12.png",
                specialDays: [
                    { date: "5", description: "A. T. Ariyaratne Birthday" },
                    { date: "21", description: "VR Day" },
                    { date: "20", description: "World Childrens Day",link: "https://www.un.org/en/observances/world-childrens-day"},


                ]
            },
            {
                name: "December",
                image: "images/13.png",
                specialDays: [
                    { date: "2", description: "World Computer Literacy Day" },
                    { date: "1-7", description: "World Computer Science Education Week" },
                ]
            }
        ];

        let currentMonth = 0;

        const monthNameElement = document.getElementById("month-name");
        const monthImageElement = document.getElementById("month-image");
        const specialDaysList = document.getElementById("special-days-list");
        const modal = document.getElementById("image-modal");
        const modalImage = document.getElementById("modal-image");
        const modalClose = document.getElementById("modal-close");

        // Update the special days list
        function updateSpecialDays() {
            specialDaysList.innerHTML = ""; // Clear existing special days
            const current = months[currentMonth];
            current.specialDays.forEach(day => {
                const listItem = document.createElement("li");
                if (day.link) {
            listItem.innerHTML = `<strong>${day.date}:</strong> <a href="${day.link}" target="_blank" rel="noopener noreferrer">${day.description}</a>`;
        } else {
            listItem.innerHTML = `<strong>${day.date}:</strong> ${day.description}`;
        }

        specialDaysList.appendChild(listItem);


            });
        }

        function updateCalendar() {
            const current = months[currentMonth];
            monthNameElement.textContent = current.name;
            monthImageElement.src = current.image;
            monthImageElement.alt = current.name;
            updateSpecialDays(); // Add special days when the calendar updates
        }

        document.getElementById("prev-month").addEventListener("click", () => {
            currentMonth = (currentMonth - 1 + months.length) % months.length;
            updateCalendar();
        });

        document.getElementById("next-month").addEventListener("click", () => {
            currentMonth = (currentMonth + 1) % months.length;
            updateCalendar();
        });

        monthImageElement.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = monthImageElement.src;
        });

        modalClose.addEventListener("click", () => {
            modal.style.display = "none";
        })

        document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        currentMonth = (currentMonth - 1 + months.length) % months.length;
        updateCalendar();
    } else if (event.key === "ArrowRight") {
        currentMonth = (currentMonth + 1) % months.length;
        updateCalendar();
    }
});
        

        // Initial load
        updateCalendar();
        
