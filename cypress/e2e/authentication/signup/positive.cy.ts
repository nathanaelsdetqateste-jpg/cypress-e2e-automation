import signUp_page from "../../../pages/signUp_page";
import { validUser } from "../../../factories/user/userFactory";

describe("Signup - Positive scenarios", () => {
  beforeEach(() => {
    signUp_page.visit();
  });
  it("Should register a new user successfully", () => {
    signUp_page.fillName(validUser().name);
    signUp_page.fillEmail(validUser().email);
    signUp_page.clickSingUp();

    signUp_page.selectTitle(validUser().title);
    signUp_page.fillPassword(validUser().password);
    signUp_page.birthdata(
      validUser().birthdata.day,
      validUser().birthdata.month,
      validUser().birthdata.year,
    );
    signUp_page.fillFirstName(validUser().firstName);
    signUp_page.fillLastName(validUser().lastName);
    signUp_page.fillCompany(validUser().company);
    signUp_page.fillAddress(validUser().address);
    signUp_page.fillAddress2(validUser().address2);
    signUp_page.selectCountry(validUser().country);
    signUp_page.fillState(validUser().state);
    signUp_page.fillCity(validUser().city);
    signUp_page.fillZipcode(validUser().zipCode);
    signUp_page.fillMobileNumber(validUser().mobileNumber);

    signUp_page.clickCreateAccount();
    signUp_page.checkSuccessMessage();
  });
});
