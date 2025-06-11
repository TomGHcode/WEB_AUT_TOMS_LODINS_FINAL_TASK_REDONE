import { BasePage } from "./BasePage"

export class APFP extends BasePage {
    static get url() {
        return "https://demoqa.com/automation-practice-form";
    }

    static BioInf = {
        get first_name() {
            return cy.get('[placeholder="First Name"]');
        },
        get last_name() {
            return cy.get('[placeholder="Last Name"]');
        },
        get gender() {
            return cy.get(`#genterWrapper`);
        },
        get date_of_birth() {
            return cy.get("#dateOfBirthInput");
        },
        get year_of_birth() {
            return cy.get(".react-datepicker__year-select");
        },
        get month_of_birth() {
            return cy.get(".react-datepicker__month-select");
        },
        get hobbies() {
            return cy.get("#hobbiesWrapper");
        },
        get picture() {
            return cy.get('input[type="file"]');
        }
    };

    static selectDate(day, month, year) {
        this.BioInf.date_of_birth.click();
        this.BioInf.month_of_birth.select(month);
        this.BioInf.year_of_birth.select(year);
        cy.get(`.react-datepicker__day--0${day < 10 ? '0' + day : day}`)
        .not('.react-datepicker__day--outside-month')
        .click();
    };


    static studies_info = {
        get subjects() {
            return cy.get("#subjectsWrapper");
        }
    };

    static electronic_info = {
        get email() {
            return cy.get("#userEmail");
        }
    };

    static phone = {
        get mobile() {
            return cy.get('[placeholder="Mobile Number"]');
        }
    };

    static address_info = {
        get current_address() {
            return cy.get("#currentAddress");
        },
        get state() {
            return cy.get("#state");
        },
        get city() {
            return cy.get("#city");
        }
    };

    static buttons = {
        get submit() {
            return cy.get("#submit");
        }
    };

    static validate_table = {
        get table() {
            return cy.get(".table-responsive");
        },
        contains(label) {
            return this.table.contains("td", label);
        },
        validateField(label, expectedValue) {
            this.contains(label).siblings().should('contain', expectedValue);
        }
    };
}