import { APFP } from './APFP';

describe('DemoQA Practice Form Automation', () => {
  beforeEach(() => {
    cy.visit(APFP.url);
  });

  it('Fills and submits the form correctly using APFP page object', () => {
    // Bio info
    APFP.BioInf.first_name.type('Royce');
    APFP.BioInf.last_name.type('DuPont');
    APFP.electronic_info.email.type('royce.du.pont@entrapranure.com');
    APFP.BioInf.gender.contains("Male").click();
    APFP.phone.mobile.type('123456789');

    // Date of Birth
    APFP.selectDate(28, 'February', '1930');

    // Subjects
    APFP.studies_info.subjects.type('Economics{enter}');

    // Hobbies
    APFP.BioInf.hobbies.contains('Music').click();

    // Image
    APFP.BioInf.picture.selectFile('cypress/e2e/royce.jpg');

    // Address
    APFP.address_info.current_address.type('Royce Du Pont Avenue, 12345');
    APFP.address_info.state.type("NCR{enter}");
    APFP.address_info.city.type("Delhi{enter}");

    // Submit
    APFP.buttons.submit.click({ force: true });

    // Validation
    APFP.validate_table.validateField('Student Name', 'Royce DuPont');
    APFP.validate_table.validateField('Student Email', 'royce.du.pont@entrapranure.com');
    APFP.validate_table.validateField('Gender', 'Male');
    APFP.validate_table.validateField('Mobile', '123456789');
    APFP.validate_table.validateField('Date of Birth', '28 February,1930');
    APFP.validate_table.validateField('Subjects', 'Economics');
    APFP.validate_table.validateField('Hobbies', 'Music');
    APFP.validate_table.validateField('Picture', 'royce.jpg');
    APFP.validate_table.validateField('Address', 'Royce Du Pont Avenue, 12345');
    APFP.validate_table.validateField('State and City', 'NCR Delhi');
  });
});
