describe("Mark 14/05/2023 at 11:41:01", () => {
  it("tests Mark 14/05/2023 at 11:41:01", async () => {

      const title = 'Mr' //string:Mr
      const firstname = 'Mark'
      const time = new Date()
      const time1=time.toDateString()
      const surname = 'Testing'+time1
      const nickname = 'Marko'
      const sex = 'Male'
      const dob = '05/11/1987'
      const ssNumber = '1122334455'
      const Weight = '187'
      const Height = '1.86'
      const startDate = '01/01/2000'
      const address1 = '3 Bridle road'
      const address2 = 'Stafford'
      const city = 'Stafford'
      const county = 'Staffordshire'
      const postcode = 'st170qd'
      const country = 'England'
      const tel = '01213334444'
      const email = 'm_moloney@test.com'
      const mobile = '012345678111'
      const accessDetails = 'Test Details'
      const allergies = 'Asthma'
      const nextofkin = 'Son'
      const nextofkintel = '0987656566'
      const doctor = 'doctor'
      const surgery = 'surgery 1'
      const surgerytel = '0456465465'
      const nextreviewDate = '01/01/2030'
    
      
//Log into PASS
    await browser.setWindowSize(1652, 961)
    await browser.url("https://qaapp.passgenius.com/logon")
    await expect(browser).toHaveUrl("https://qaapp.passgenius.com/logon")
    await browser.$("#exampleInputEmail1").click()
    await browser.$("#exampleInputEmail1").setValue("markMoloney456321")
    await browser.$("#exampleInputPassword1").click()
    await browser.$("#exampleInputPassword1").setValue("TechTest446655--")
    await browser.$("#login-btn").click()
//Navigate to Residents tab
    await browser.$("#customersTab").click()
    await browser.$("//button[contains(text(),'Add')]").click()
      
//Populate the form
    await browser.$("#title").click()
    $("#title").selectByVisibleText(title)    
    await browser.$("#firstname").click()
    await browser.$("#firstname").setValue(firstname)
    await browser.$("#surname").click()
    await browser.$("#surname").setValue(surname)
    await browser.$("#nickname").click()
    await browser.$("#nickname").setValue(nickname)  
    await browser.$("#sex").click()
    $("#sex").selectByVisibleText(sex)  
    await browser.$("#dob").click()
    await browser.$("#dob").setValue(dob)
    await browser.$("#ssNumber").click()
    await browser.$("#ssNumber").setValue(ssNumber)
    await browser.$("#admissionWeightInKilograms").click()
    await browser.$("#admissionWeightInKilograms").setValue(Weight)
    await browser.$("#admissionHeightInMeters").click()
    await browser.$("#admissionHeightInMeters").setValue(Height)
    await browser.$("#startDate").click()
    await browser.$("#startDate").setValue(startDate)
    await browser.$("#address1").click()
    await browser.$("#address1").setValue(address1)
    await browser.$("#address2").click()
    await browser.$("#address2").setValue(address2)
    await browser.$("#city").click()
    await browser.$("#city").setValue(city)
    await browser.$("#county").click()
    await browser.$("#county").setValue(county)
    await browser.$("#postcode").click()
    await browser.$("#postcode").setValue(postcode)
    await browser.$("#country").click()
    await browser.$("#country").setValue(country)
    await browser.$("#tel").click()
    await browser.$("#tel").setValue(tel)
    await browser.$("#email").click()
    await browser.$("#email").setValue(email)  
    await browser.$("#mobile").click()
    await browser.$("#mobile").setValue(mobile)
    await browser.$("#accessDetails").click()
    await browser.$("#accessDetails").setValue(accessDetails)
    await browser.$("#allergies").click()
    await browser.$("#allergies").setValue(allergies)
    await browser.$("#nextofkin").click()
    await browser.$("#nextofkin").setValue(nextofkin)
    await browser.$("#nextofkintel").click()
    await browser.$("#nextofkintel").setValue(nextofkintel)
    await browser.$("#doctor").click()
    await browser.$("#doctor").setValue(doctor)
    await browser.$("#surgery").click()
    await browser.$("#surgery").setValue(surgery)
    await browser.$("#surgerytel").click()
    await browser.$("#surgerytel").setValue(surgerytel)
// Save the form
    await browser.$("//button[contains(text(),'Save')]").click()
//Check that the care plan page displays
    await expect(browser).toHaveUrlContaining("https://qaapp.passgenius.com/orchardhouse/customers/")
    await expect(browser).toHaveUrlContaining("/careplan/outcomes")
//Save again
    await browser.$("//button[contains(text(),'Save')]").click()
//add a review date 
    await browser.$("#review-date").click()
    await browser.$("#review-date").setValue(nextreviewDate)
    await browser.$("//button[contains(text(),'OK')]").click()       
//Navigate to the Details tab
    await browser.$("(//a[contains(text(), 'Details')]/parent::li)[2]").click() 
//Set status to Active and add reason
    await browser.$("//*[@id='customer-status-update']").click()
    await browser.$("(//option[contains(text(), 'Select customer status')]/parent::select)[1]").click()
    $("(//option[contains(text(), 'Select customer status')]/parent::select)[1]").selectByVisibleText("ACTIVE")
    await browser.$("(//option[contains(text(), 'Select customer status')]/parent::select)[1]").click()
    await browser.$("//input[@placeholder='Optional']").click()
    await browser.$("//input[@placeholder='Optional']").setValue("For a test")
    await browser.$("//button[contains(text(),'Save')]").click()
//Click on Residents tab again  
    await browser.$("#customersTab").click()
//Search for new addition 
    await browser.$("#filterTerm").click()
    await browser.$("#filterTerm").setValue(surname)
//Open the resident
    await browser.$(`//span[contains(text(),'${surname}')]`).click()
//Navigate to Details tab
    await browser.$("(//a[contains(text(), 'Details')]/parent::li)[2]").click() 
//check that the details entered match those displayed
    const afterTitle = await browser.$("#title").getValue()
    expect(afterTitle== title)
    const afterfirstname = await browser.$("#firstname").getValue()
    expect(afterfirstname== firstname)
    const aftersurname = await browser.$("#surname").getValue()
    expect(aftersurname== surname)
    const afternickname = await browser.$("#nickname").getValue()
    expect(afternickname== nickname)
    const aftersex = await browser.$("#sex").getValue()
    expect(aftersex== sex)
    const afterdob = await browser.$("#dob").getValue()
    expect(afterdob== dob)
    const afterssNumber = await browser.$("#ssNumber").getValue()
    expect(afterssNumber== ssNumber)
    const afterWeight = await browser.$("#admissionWeightInKilograms").getValue()
    expect(afterWeight== Weight)
    const afterHeight = await browser.$("#admissionHeightInMeters").getValue()
    expect(afterHeight== Height)
    const afterstartDate = await browser.$("#startDate").getValue()
    expect(afterstartDate== startDate)
    const afteraddress1 = await browser.$("#address1").getValue()
    expect(afteraddress1== address1)
    const afteraddress2 = await browser.$("#address2").getValue()
    expect(afteraddress2== address2)
    const aftercity = await browser.$("#city").getValue()
    expect(aftercity== city)
    const aftercounty = await browser.$("#county").getValue()
    expect(aftercounty== county)
    const afterpostcode = await browser.$("#postcode").getValue()
    expect(afterpostcode== postcode)
    const aftercountry = await browser.$("#country").getValue()
    expect(aftercountry== country)
    const aftertel = await browser.$("#tel").getValue()
    expect(aftertel== tel)
    const afteremail = await browser.$("#email").getValue()
    expect(afteremail== email)
    const aftermobile = await browser.$("#mobile").getValue()
    expect(aftermobile== mobile)
    const afteraccessDetails = await browser.$("#accessDetails").getValue()
    expect(afteraccessDetails== accessDetails)
    const afterallergies = await browser.$("#allergies").getValue()
    expect(afterallergies== allergies)
    const afternextofkin = await browser.$("#nextofkin").getValue()
    expect(afternextofkin== nextofkin)
    const afternextofkintel = await browser.$("#nextofkintel").getValue()
    expect(afternextofkintel== nextofkintel)
    const afterdoctor = await browser.$("#doctor").getValue()
    expect(afterdoctor== doctor)
    const aftersurgery = await browser.$("#surgery").getValue()
    expect(aftersurgery== surgery)
    const aftersurgerytel = await browser.$("#surgerytel").getValue()
    expect(aftersurgerytel== surgerytel)
  });
});
