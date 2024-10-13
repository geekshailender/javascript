<!-- START doctoc -->

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [What are the possible ways to create objects in JavaScript](#what-are-the-possible-ways-to-create-objects-in-javascript) |
| 2 | [What is a prototype chain](#what-is-a-prototype-chain) |
| 3 | [What is the difference between Call, Apply and Bind](#what-is-the-difference-between-call-apply-and-bind) |
| 4 | [What are the array mutation methods?](#what-are-the-array-mutation-methods) |
<!-- TOC_END -->

<!-- QUESTIONS_START -->
1. ### What are the possible ways to create objects in JavaScript

   There are many ways to create objects in javascript as mentioned below:

   1. **Object literal syntax:**

      The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

      ```javascript
      var object = {
           name: "Sudheer",
           age: 34
      };
      ```

      Object literal property values can be of any data type, including array, function, and nested object.

      **Note:** This is one of the easiest ways to create an object.

   2. **Object constructor:**

      The simplest way to create an empty object is using the `Object` constructor. Currently this approach is not recommended.

      ```javascript
      var object = new Object();
      ```

      The `Object()` is a built-in constructor function so "new" keyword is not required. The above code snippet can be re-written as:

      ```javascript
      var object = Object();
      ```

   3. **Object's create method:**

      The `create` method of Object is used to create a new object by passing the specified prototype object and properties as arguments, i.e., this pattern is helpful to create new objects based on existing objects.
      The second argument is optional and it is used to create properties on a newly created object.

      The following code creates a new empty object whose prototype is null.

      ```javascript
      var object = Object.create(null);
      ```
      The following example creates an object along with additional new properties.

      ```javascript
      let vehicle = {
        wheels: '4',
        fuelType: 'Gasoline',
        color: 'Green'
      }
      let carProps = {
        type: {
          value: 'Volkswagen'
        },
        model: {
          value: 'Golf'
        }
      }

      var car = Object.create(vehicle, carProps);
      console.log(car);
      ```

   4. **Function constructor:**

      In this approach, create any function and apply the new operator to create object instances.

      ```javascript
      function Person(name) {
        this.name = name;
        this.age = 21;
      }
      var object = new Person("Sudheer");
      ```

   5. **Function constructor with prototype:**

      This is similar to function constructor but it uses prototype for their properties and methods,

      ```javascript
      function Person() {}
      Person.prototype.name = "Sudheer";
      var object = new Person();
      ```

      This is equivalent to creating an instance with Object.create method with a function prototype and then calling that function with an instance and parameters as arguments.

      ```javascript
      function func() {}

      new func(x, y, z);
      ```

      **(OR)**

      ```javascript
      // Create a new instance using function prototype.
      var newInstance = Object.create(func.prototype)

      // Call the function
      var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);
      ```
   6. **Object's assign method:**

      The `Object.assign` method is used to copy all the properties from one or more source objects and stores them into a target object.

      The following code creates a new staff object by copying properties of his working company and the car he owns.

      ```javascript
      const orgObject = { company: 'XYZ Corp'};
      const carObject = { name: 'Toyota'};
      const staff = Object.assign({}, orgObject, carObject);
      ```

   7. **ES6 Class syntax:**

      ES6 introduces class feature to create objects.

      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
      }

      var object = new Person("Sudheer");
      ```

   8. **Singleton pattern:**

      A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance. This way one can ensure that they don't accidentally create multiple instances.

      ```javascript
      var object = new (function () {
        this.name = "Sudheer";
      })();
      ```

      **[⬆ Back to Top](#table-of-contents)**

2. ### What is a prototype chain

   **Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. i.e, When you create an object using a constructor function or a class, the created object inherits properties from a prototype object.

   The prototype on object instance is available through **Object.getPrototypeOf(object)** or **\_\_proto\_\_** property whereas prototype on constructor function is available through **Object.prototype**.

   ![Screenshot](images/prototype_chain.png)

   **[⬆ Back to Top](#table-of-contents)**

3. ### What is the difference between Call, Apply and Bind

   The difference between Call, Apply and Bind can be explained with below examples,

   **Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
   invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
   ```

   **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
   invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
   ```

   **Bind:** returns a new function, allowing you to pass any number of arguments

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   var inviteEmployee1 = invite.bind(employee1);
   var inviteEmployee2 = invite.bind(employee2);
   inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
   inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
   ```

   Call and Apply are pretty much interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**.

   Bind creates a new function that will have `this` set to the first parameter passed to bind().

   **[⬆ Back to Top](#table-of-contents)**


4. ### What are the array mutation methods?
  JavaScript array methods can be categorized into two groups: 
  1. Mutating methods: These are the methods that directly modify the original array.
  2. Non-mutating methods: These methods return a new array without altering the original one.

   There are 9 methods in total that mutate the arrays,
   1. **push:** Adds one or more elements to the end of the array and returns the new length.
   2. **pop:**  Removes the last element from the array and returns that element.
   3. **unshift:**  Adds one or more elements to the beginning of the array and returns the new length..
   4. **shift:** Removes the first element from the array and returns that element.
   5. **splice:** Adds or removes elements from the array at a specific index position.
   6. **sort:** Sorts the elements of the array in-place based on a given sorting criteria.
   7. **reverse:** Reverses the order of elements in the given array.
   8. **fill:**  Fills all elements of the array with a specific value.
   9. **copyWithIn:** Copies a sequence of elements within the array to a specified target index in the same array.

**[⬆ Back to Top](#table-of-contents)**

<!-- QUESTIONS_END -->

### Coding Exercise
<!-- END doctoc -->
