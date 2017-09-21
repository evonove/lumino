//
//  LuminoUITests.swift
//  LuminoUITests
//
//  Created by Developers on 9/21/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import XCTest

class LuminoUITests: XCTestCase {
    override func setUp() {
        super.setUp()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
        
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.
        let app = XCUIApplication()
        setupSnapshot(app)
        app.launch()

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
      
      let app = XCUIApplication()
      
      XCUIDevice.shared().orientation = .portrait
      
      app.otherElements["Gateways"].tap()
      
      snapshot("01")
      
      app.children(matching: .window).element(boundBy: 0).children(matching: .other).element.children(matching: .other)["Press 'Add' to add your first controller DISABLED CONTROLLERS Press 'Add' to add your first gateway   Controllers   Gateways Gateways Add"].children(matching: .other)["Press 'Add' to add your first controller DISABLED CONTROLLERS Press 'Add' to add your first gateway   Controllers   Gateways Gateways Add"].children(matching: .other)["Press 'Add' to add your first controller DISABLED CONTROLLERS Press 'Add' to add your first gateway   Controllers   Gateways Gateways Add"].children(matching: .other)["Press 'Add' to add your first controller DISABLED CONTROLLERS Press 'Add' to add your first gateway   Controllers   Gateways Gateways Add"].children(matching: .other)["Press 'Add' to add your first controller DISABLED CONTROLLERS Press 'Add' to add your first gateway   Controllers   Gateways Gateways Add"].children(matching: .other)["Gateways Add"].children(matching: .other)["Gateways Add"].children(matching: .other)["Gateways Add"].children(matching: .other)["Gateways Add"].children(matching: .other)["Add"].children(matching: .other)["Add"].children(matching: .other)["Add"].tap()
      app.otherElements["INFO Name"].children(matching: .other)["Name"].children(matching: .other)["Name"].children(matching: .other)["Name"].tap()
      app.typeText("Office")
      app.children(matching: .other)["Gateway host"].children(matching: .other)["Gateway host"].tap()
      
      let altriNumeriKey = app.keys["altri, numeri"]
      altriNumeriKey.tap()
      app.typeText("192.168.247.35")
      app.otherElements["Gateway Port Password"].children(matching: .other)["Gateway Port"].children(matching: .other)["Gateway Port"].tap()
      altriNumeriKey.tap()
      app.typeText("20000")
      
      snapshot("02")

      app.otherElements["New gateway Back Save"].children(matching: .other)["Save"].children(matching: .other)["Save"].children(matching: .other)["Save"].tap()
      
      snapshot("03")

      app.otherElements["  Controllers"].tap()
      
      snapshot("04")
      
    }
    
}
