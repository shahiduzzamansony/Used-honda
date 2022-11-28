import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mx-24 my-6">
        <div className="card bg-violet-600 text-white">
          <div className="card-body">
            <h2 className="card-title rext-3xl">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              There are four main types of state you need to properly manage in
              your React apps: Local state, Global state, Server state, URL
              state Let's cover each of these in detail: Local (UI) state –
              Local state is data we manage in one or another component. Local
              state is most often managed in React using the useState hook. For
              example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a form’s
              inputs. Global (UI) state – Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global. Server state – Data
              that comes from an external server that must be integrated with
              our UI state. Server state is a simple concept, but can be hard to
              manage alongside all of our local and global UI state. There are
              several pieces of state that must be managed every time you fetch
              or update data from an external server, including loading and
              error state. Fortunately there are tools such as SWR and React
              Query that make managing server state much easier. URL state –
              Data that exists on our URLs, including the pathname and query
              parameters. URL state is often missing as a category of state, but
              it is an important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL! There are undoubtedly more pieces
              of state that we could identify, but these are the major
              categories worth focusing on for most applications you build
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24 my-6">
        <div className="card bg-violet-600 text-white">
          <div className="card-body">
            <h2 className="card-title rext-3xl">
              How does prototypical inheritance work?
            </h2>
            <p>
              Simply put, prototypical inheritance refers to the ability to
              access object properties from another object. We use a JavaScript
              prototype to add new properties and methods to an existing object
              constructor. We can then essentially tell our JS code to inherit
              properties from a prototype. Prototypical inheritance allows us to
              reuse the properties or methods from one JavaScript object to
              another through a reference pointer function. All JavaScript
              objects inherit properties and methods from a prototype: Date
              objects inherit from Date.prototype. Array objects inherit from
              Array.prototype. Player objects inherit from Player.prototype. The
              Object.prototype is on top of the prototype inheritance chain. ​
              Date objects, Array objects, and Player objects all inherit from
              Object.prototype.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24 my-6">
        <div className="card bg-violet-600 text-white">
          <div className="card-body">
            <h2 className="card-title rext-3xl">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p>
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended. Unit testing is an important step in the
              development process, because if done correctly, it can help detect
              early flaws in code which may be more difficult to find in later
              testing stages. Unit testing is a component of test-driven
              development (TDD), a pragmatic methodology that takes a meticulous
              approach to building a product by means of continual testing and
              revision. This testing method is also the first level of software
              testing, which is performed before other testing methods such as
              integration testing. Unit tests are typically isolated to ensure a
              unit does not rely on any external code or functions. Testing can
              be done manually but is often automated. How unit tests work A
              unit test typically comprises of three stages: plan, cases and
              scripting and the unit test itself. In the first step, the unit
              test is prepared and reviewed. The next step is for the test cases
              and scripts to be made, then the code is tested. Test-driven
              development requires that developers first write failing unit
              tests. Then they write code and refactor the application until the
              test passes. TDD typically results in an explicit and predictable
              code base.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24 my-6">
        <div className="card bg-violet-600 text-white">
          <div className="card-body">
            <h2 className="card-title rext-3xl">React vs. Angular vs. Vue?</h2>
            <p>
              Angular is a front-end framework with lots of components,
              services, and tools. On Angular’s site, you can see that they
              define Angular as: “The modern web developer’s platform” It is
              developed and maintained by Google developers, but curiously it is
              not used to implement any of their most common products such as
              Search or YouTube. React is considered a UI library. They define
              themselves as: “A JavaScript library for building user interfaces”
              Facebook developers are behind the development and maintenance of
              this library. And, in this case, most of Facebook’s products are
              made with React. Last but not least, Vue.js is, according to its
              site: “A progressive JavaScript framework” Vue.js is developed and
              led by Evan You, but also it counts on a huge open-source
              community. These three frameworks have several things in common,
              such as each follows a component-based architecture and allows
              creating UI features quickly. React and Vue.js are mainly
              declarative, and while Angular could also be declarative, it’s
              really more imperative. Nevertheless, they present some more
              differences according to their structure, architecture and way of
              working, so let’s dive into all these characteristics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
