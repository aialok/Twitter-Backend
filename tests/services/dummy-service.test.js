// import { getUserData } from '../../src/services/dummy-service';

// test('getUserData returns correct data', () => {
//   const mockFetch = jest.fn().mockResolvedValue({
//     json: () => Promise.resolve({
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       age: 30
//     })
//   });
//   global.fetch = mockFetch;

//   return getUserData(123).then(data => {
//     expect(data).toEqual({
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       age: 30
//     });
//     expect(mockFetch).toHaveBeenCalledWith('https://api.example.com/users/123');
//   });
// });

/*The code above is a Jest test case for a function called getUserData that is defined in a module called dummy-service. The getUserData function retrieves user data from an external API and returns a Promise that resolves to the user data.

The test case uses Jest's mocking functionality to create a fake version of the fetch function that is used by the getUserData function to make HTTP requests to the external API. The mock version of the fetch function returns fake data that is used to test the getUserData function.

The jest.fn() method is used to create a mock version of the fetch function. The mockResolvedValue method is then used to specify the data that should be returned when the json method is called on the response object. This allows us to simulate the behavior of the external API without actually making any HTTP requests.

The global.fetch property is then set to the mock version of the fetch function, so that any calls to fetch within the getUserData function will use the mock version instead of the real version.

Finally, the getUserData function is called with a user ID of 123, and the returned data is checked to ensure that it matches the expected values. The toHaveBeenCalledWith method is also used to check that the fetch function was called with the correct URL.

By using Jest's mocking functionality, we're able to test the getUserData function in isolation, without relying on the external API. This makes our tests faster, more reliable, and easier to control. Additionally, by using Jest as our testing framework, we can easily run our tests and get detailed feedback on any errors or failures.
*/

// import * as calculator from '../../src/services/dummy-service';

// test('calculate calls the correct function for sum', () => {
//   const mockSum = jest.spyOn(calculator, 'sum').mockReturnValue(4);
//   const result = calculator.calculate(1, mockSum, 2);
//   expect(mockSum).toHaveBeenCalledWith(1, 2);
//   expect(result).toBe(4);
// });

// import * as dummyFunctions from "../../src/services/dummy-service";

// test("helper function returns true", () => {
//   const mockHelper = jest
//     .spyOn(dummyFunctions, "helper")
//     .mockReturnValue(false);
//   const result = dummyFunctions.execute();
//   expect(mockHelper).toHaveBeenCalled();
//   expect(result).toBe("Hello World");
// });

// Import the necessary modules
// import * as dummyFunctions from "../../src/services/dummy-service";

// // Create a spy on the "helper" function
// const mockHelper = jest.spyOn(dummyFunctions, "helper");

// // Mock the return value of the "helper" function
// mockHelper.mockReturnValue(false);

// // Call the function you want to test
// const result = dummyFunctions.execute();

// // Assertions
// expect(mockHelper).toHaveBeenCalled();
// expect(result).toBe("Hello World");
// import * as dummyFunctions from "../../src/services/dummy-service";
 
// test("helper function returns true", () => {
//   const mockHelper = jest.spyOn(dummyFunctions, "helper").mockReturnValue(false);
//   const result = dummyFunctions.execute();
//   expect(mockHelper).toHaveBeenCalled();
//   expect(result).toBe("bye world"); // Since the mockHelper is returning false
// });

beforeEach(() => {
  jest.resetModules();
});


import * as dummyService from "../../src/services/dummy-service";

test("execute function returns 'Hello World'", () => {
  // Create a spy on the 'helper' function
  const helperSpy = jest.spyOn(dummyService, "helper");

  // Mock the behavior of 'helper'
  helperSpy.mockReturnValue(test);

  // Call the 'execute' function
  const result = dummyService.execute();

  // Assert that 'helper' was called and the result is as expected
  expect(helperSpy).toHaveBeenCalled();
  expect(result).toBe("Hello World");

  // Restore the original implementation of 'helper'
  helperSpy.mockRestore();
})