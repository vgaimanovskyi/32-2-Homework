$(document).ready(function () {
    const PlanetExpress = [{
        name: "Philip J. Fry",
        photo: "images/fry.jpg",
        skill: "delivery boy",
        description: "Is a fictional character and the protagonist of the animated sitcom Futurama. He is a slacker delivery boy from the 20th century who becomes cryogenically frozen and reawakens in the 30th century to become a delivery boy there with an intergalactic delivery company Planet Express.",
    }, {
        name: "Turanga Leela",
        photo: "images/leela.jpg",
        skill: "ship's captain",
        description: "Is a fictional character from the animated television series Futurama. Leela is spaceship captain, pilot, and head of all aviation services on board the Planet Express Ship. Throughout the series, she has an on-again, off-again relationship with Philip J. Fry, the central character in the series.",
    }, {
        name: "Bender Rodriguez",
        photo: "images/bender.jpg",
        skill: "assistant sales manager",
        description: "Is one of the main characters in the animated television series Futurama. According to the character's backstory, Bender was purpose built in Tijuana, Mexico a reference to Bending in Mexican maquiladoras. Bender is also occasionally portrayed as possessing a sympathetic side, suggesting that he is not as belligerent as he claims, a view often echoed by his friends.",
    }, {
        name: "Professor Hubert J. Farnsworth",
        photo: "images/farnsworth.jpg",
        skill: "founder of Planet Express Inc.",
        description: "Is a fictional character in the American animated television series Futurama. The mad scientist proprietor of the Planet Express delivery service for whom the main characters work. He alternates between intelligence and amoral senility due to his greatly advanced age.",
    }, {
        name: "Amy Wong",
        photo: "images/amywong.jpg",
        skill: "accident-prone long-term intern",
        description: "She is the ditzy, spoiled daughter of wealthy agriculturalist-industrialist Han Chinese rancher parents who raise buggalo on their property on Mars, which takes up the entire western hemisphere of the planet. Amy is known for being somewhat shallow, kind, and ditzy.",
    }, {
        name: "Hermes Conrad",
        photo: "images/conrad.jpg",
        skill: "accountant",
        description: "Is a workaholic bureaucrat and the accountant at the Planet Express from Jamaica with a heavy Jamaican accent. He manages the Planet Express delivery business with responsibilities that include paying bills, giving out legal waivers, and notifying next of kin. Hermes is very enthusiastic about the Limbo and was once an Olympic limbo athlete.",
    }, {
        name: "Dr. John A. Zoidberg",
        photo: "images/zoidberg.jpg",
        skill: "staff physician",
        description: "Is a fictional character in the television series Futurama. He is a Decapodian, a crustacean-like species of alien, who works as the staff doctor for Planet Express, despite his poor understanding of human physiology and allusions to his questionable credentials.",
    }];
    class EmpTable {
        constructor(data) {
            this.name = data.name;
            this.photo = data.photo;
            this.skill = data.skill;
            this.description = data.description;
        }
        getHtml() {
            let result = `<div class="wrapper">`;
            result += `<div class="wrapper__coll">`;

            result += `<div class="block-photo">`;
            result += `<img src="${this.photo}" alt="${this.name}" class="block-photo__img">`;
            result += `</div>`;

            result += `</div>`; //wrapper__coll
            result += `<div class="wrapper__coll wrapper__coll--heighline">`;

            result += `<div class="staff">`;
            result += `<h2 class="staff__name">${this.name}</h2>`;
            result += `<div class="solid-line"></div>`;
            result += `<div class="staff__prof">${this.skill}</div>`;
            result += `<div class="staff__social">`;
            result += `<ul class="social">`;
            result += `<li class="social__item"><a href="" class="social__link"><i class="fab fa-facebook-f"></i></a></li>`;
            result += `<li class="social__item"><a href="" class="social__link"><i class="fab fa-twitter"></i></a></li>`;
            result += `<li class="social__item"><a href="" class="social__link"><i class="fab fa-instagram"></i></a></li>`;
            result += `<li class="social__item"><a href="" class="social__link"><i class="fab fa-linkedin-in"></i></a></li>`;
            result += `</ul>`;
            result += `</div>`;
            result += `<div class="staff__description">${this.description}</div>`;
            result += `<div class="dashed-line"></div>`;
            result += `<a href="#" class="staff__btn-link">VIEW PROFILE</a>`;
            result += `</div>`; //staff
            result += `</div>`; //wrapper__coll--heighline

            result += `</div>`; //wrapper
            document.getElementById("js-carousel").innerHTML += result;
        }
    }
    class Employee {
        constructor(_data) {
            this.data = _data;
        }
        print() {
            for (let item of this.data) {
                let worker = new EmpTable(item);
                worker.getHtml();
            }
        }
    }
    const workers = new Employee(PlanetExpress);
    workers.print();

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: true,
        smartSpeed: 1000
    });
});