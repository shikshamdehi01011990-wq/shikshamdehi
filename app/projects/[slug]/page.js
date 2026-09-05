import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Package,
  Target,
  Wrench,
} from "lucide-react";

const projectData = {
  "smart-plant-monitor": {
    title: "Smart Plant Monitor",
    category: "Arduino",
    age: "Classes 6–8",
    difficulty: "Beginner",
    duration: "2–3 Hours",
    image: "/images/shikshamdehiarduino-projects.jpeg",

    problem:
      "How can technology help us understand whether a plant needs attention?",

    concept:
      "Students explore sensors, moisture measurement, input data and basic automation while building a simple plant-monitoring system.",

    components: [
      "Arduino board",
      "Soil moisture sensor",
      "LED / indicator",
      "Jumper wires",
      "Breadboard",
      "USB cable",
    ],

    learn: [
      "Understand how sensors collect information",
      "Learn basic Arduino programming",
      "Understand digital and analog inputs",
      "Connect electronic components safely",
      "Read and interpret sensor values",
      "Test and improve a working prototype",
    ],

    build: [
      "Understand the plant-monitoring problem",
      "Identify the components required",
      "Connect the moisture sensor to Arduino",
      "Write and upload the program",
      "Observe sensor readings",
      "Create an indicator for plant condition",
      "Test the prototype with different soil conditions",
    ],

    challenge:
      "Can you modify the project so that it gives different indicators for dry, normal and wet soil?",

    upgrades: [
      "Add an LCD display",
      "Add a buzzer alert",
      "Add automatic water pumping",
      "Send readings to a mobile dashboard",
    ],

    outcomes: [
      "Sensor understanding",
      "Arduino fundamentals",
      "Basic coding",
      "Circuit building",
      "Testing and troubleshooting",
      "Problem solving",
    ],
  },

  "line-following-robot": {
    title: "Line Following Robot",
    category: "Robotics",
    age: "Classes 6–10",
    difficulty: "Intermediate",
    duration: "4–6 Hours",
    image: "/images/shikshamdehi-robotics-projects.jpeg",

    problem:
      "How can a robot detect a path and automatically decide which direction to move?",

    concept:
      "Students learn about sensors, motors, decision-making and control systems by building a robot that follows a marked path.",

    components: [
      "Arduino board",
      "IR sensors",
      "Motor driver",
      "DC geared motors",
      "Robot chassis",
      "Wheels",
      "Battery pack",
    ],

    learn: [
      "Understand how IR sensors detect a surface",
      "Learn basic robot control logic",
      "Control DC motors using a motor driver",
      "Understand sensor-based decisions",
      "Write conditional Arduino programs",
      "Debug a physical robotic system",
    ],

    build: [
      "Understand how line detection works",
      "Assemble the robot chassis",
      "Connect motors and motor driver",
      "Install and test IR sensors",
      "Program basic movement",
      "Add left/right decision logic",
      "Test the robot on different tracks",
    ],

    challenge:
      "Can you make your robot complete a more complex track with sharp turns and intersections?",

    upgrades: [
      "Improve turning accuracy",
      "Add multiple sensors",
      "Create intersection logic",
      "Experiment with speed control",
    ],

    outcomes: [
      "Robotics fundamentals",
      "Sensor integration",
      "Motor control",
      "Programming logic",
      "Debugging",
      "Engineering thinking",
    ],
  },

  "automatic-night-lamp": {
    title: "Automatic Night Lamp",
    category: "Electronics",
    age: "Classes 3–6",
    difficulty: "Beginner",
    duration: "1–2 Hours",
    image: "/images/shikshamdehi-electronics-sessions.jpeg",

    problem:
      "Can a light automatically turn on when the surroundings become dark?",

    concept:
      "Students explore light sensing, simple circuits and automation through a practical night-lamp prototype.",

    components: [
      "LDR sensor",
      "LED",
      "Resistor",
      "Breadboard",
      "Jumper wires",
      "Battery / power source",
    ],

    learn: [
      "Understand how an LDR responds to light",
      "Identify basic electronic components",
      "Build a simple circuit",
      "Understand input and output",
      "Explore automatic control",
      "Test the circuit in different light conditions",
    ],

    build: [
      "Understand the working principle",
      "Identify the electronic components",
      "Build the sensing circuit",
      "Connect the LED output",
      "Test the circuit under light",
      "Test the circuit in darkness",
      "Improve the circuit if required",
    ],

    challenge:
      "Can you design the circuit so the lamp responds smoothly when the light level changes?",

    upgrades: [
      "Add brightness control",
      "Use multiple LEDs",
      "Create a rechargeable version",
      "Design a 3D printed lamp enclosure",
    ],

    outcomes: [
      "Basic electronics",
      "Circuit building",
      "Sensors",
      "Automation",
      "Observation",
      "Testing",
    ],
  },

  "mini-weather-station": {
    title: "Mini Weather Station",
    category: "IoT",
    age: "Classes 7–10",
    difficulty: "Intermediate",
    duration: "4–6 Hours",
    image: "/images/shikshamdehiarduino-projects.jpeg",

    problem:
      "How can we use technology to collect information about our environment?",

    concept:
      "Students use sensors to collect environmental data and explore how real-world information can be measured and displayed.",

    components: [
      "Arduino / microcontroller",
      "Temperature sensor",
      "Humidity sensor",
      "Display",
      "Breadboard",
      "Jumper wires",
    ],

    learn: [
      "Understand environmental sensors",
      "Collect temperature and humidity data",
      "Read sensor values",
      "Display information",
      "Understand data-based decision making",
      "Build and test a measurement system",
    ],

    build: [
      "Identify the environmental parameters",
      "Connect the sensors",
      "Read sensor values",
      "Program the microcontroller",
      "Display the readings",
      "Compare readings in different conditions",
      "Improve the monitoring system",
    ],

    challenge:
      "Can you add another environmental parameter and display all the readings together?",

    upgrades: [
      "Add an air-quality sensor",
      "Store historical readings",
      "Connect the project to the internet",
      "Create a web dashboard",
    ],

    outcomes: [
      "Sensor technology",
      "Data collection",
      "Arduino programming",
      "IoT fundamentals",
      "Data interpretation",
      "System testing",
    ],
  },

  "smart-dustbin": {
    title: "Smart Dustbin",
    category: "Arduino",
    age: "Classes 6–9",
    difficulty: "Beginner",
    duration: "3–4 Hours",
    image: "/images/shikshamdehiarduino-projects.jpeg",

    problem:
      "How can a dustbin open automatically when someone wants to throw waste?",

    concept:
      "Students combine distance sensing, servo motors and programming to create a simple automation system.",

    components: [
      "Arduino board",
      "Ultrasonic sensor",
      "Servo motor",
      "Mini dustbin model",
      "Breadboard",
      "Jumper wires",
    ],

    learn: [
      "Understand distance measurement",
      "Use an ultrasonic sensor",
      "Control a servo motor",
      "Write conditional logic",
      "Combine input and output devices",
      "Test an automated mechanism",
    ],

    build: [
      "Understand the automation problem",
      "Connect the ultrasonic sensor",
      "Connect the servo motor",
      "Program distance detection",
      "Create automatic lid movement",
      "Test different distances",
      "Improve the mechanism",
    ],

    challenge:
      "Can you make the lid open only when a person is close and automatically close after a delay?",

    upgrades: [
      "Add waste-level detection",
      "Add an LED indicator",
      "Create a full-size prototype",
      "Add IoT monitoring",
    ],

    outcomes: [
      "Automation",
      "Sensors",
      "Servo control",
      "Arduino",
      "Programming logic",
      "Mechanical thinking",
    ],
  },

  "solar-tracker": {
    title: "Solar Tracker",
    category: "Electronics",
    age: "Classes 8–12",
    difficulty: "Advanced",
    duration: "5–8 Hours",
    image: "/images/shikshamdehi-electronics-sessions.jpeg",

    problem:
      "How can a solar panel automatically change its direction to receive more light?",

    concept:
      "Students explore light sensing, motor control and mechanical movement while developing a solar-tracking prototype.",

    components: [
      "Microcontroller",
      "LDR sensors",
      "Servo / geared motor",
      "Solar panel",
      "Resistors",
      "Mechanical frame",
    ],

    learn: [
      "Understand solar energy systems",
      "Compare light intensity",
      "Use multiple sensors",
      "Control motor movement",
      "Design a feedback-based system",
      "Test and optimise a mechanism",
    ],

    build: [
      "Understand the solar tracking problem",
      "Design the sensor arrangement",
      "Build the mechanical frame",
      "Connect the sensors",
      "Program directional movement",
      "Test the tracking system",
      "Compare performance",
    ],

    challenge:
      "Can you improve the tracking accuracy while reducing unnecessary motor movement?",

    upgrades: [
      "Build dual-axis tracking",
      "Add power measurement",
      "Log performance data",
      "Create a larger prototype",
    ],

    outcomes: [
      "Renewable energy concepts",
      "Sensors",
      "Motor control",
      "Feedback systems",
      "Mechanical design",
      "Optimisation",
    ],
  },

  "3d-printed-prototype": {
    title: "3D Printed Prototype",
    category: "3D Printing",
    age: "Classes 7–12",
    difficulty: "Intermediate",
    duration: "4–6 Hours",
    image: "/images/shikshamdehi-3d-printing.jpeg",

    problem:
      "How can a digital idea be transformed into a physical object?",

    concept:
      "Students follow a complete digital-to-physical workflow: idea, 3D design, preparation, printing, inspection and improvement.",

    components: [
      "Computer",
      "3D CAD software",
      "3D printer",
      "Filament",
      "Measuring tools",
      "Prototype parts",
    ],

    learn: [
      "Understand 3D modelling fundamentals",
      "Create a simple digital design",
      "Understand dimensions and tolerances",
      "Prepare a model for printing",
      "Understand basic 3D printing settings",
      "Inspect and improve a printed prototype",
    ],

    build: [
      "Define the object to be created",
      "Create the digital model",
      "Check dimensions",
      "Prepare the print",
      "Start the printing process",
      "Inspect the physical part",
      "Modify the design and improve it",
    ],

    challenge:
      "Can you redesign your model so that it is stronger, lighter or easier to print?",

    upgrades: [
      "Create moving parts",
      "Design an enclosure",
      "Add mechanical joints",
      "Optimise print orientation",
    ],

    outcomes: [
      "3D CAD",
      "Digital fabrication",
      "3D printing",
      "Design thinking",
      "Prototyping",
      "Iteration",
    ],
  },

  "paper-bridge": {
    title: "Engineering Paper Bridge",
    category: "Mechanical",
    age: "Classes 3–8",
    difficulty: "Beginner",
    duration: "1–2 Hours",
    image: "/images/shikshamdehi-mechanicals.jpeg",

    problem:
      "How can a simple sheet of paper be transformed into a structure strong enough to carry weight?",

    concept:
      "Students explore structure, shape, load distribution and material efficiency through a practical engineering challenge.",

    components: [
      "Paper sheets",
      "Tape",
      "Scissors",
      "Ruler",
      "Weights",
      "Testing surface",
    ],

    learn: [
      "Understand structural strength",
      "Explore different shapes",
      "Understand load distribution",
      "Compare design choices",
      "Measure and test performance",
      "Improve a design through iteration",
    ],

    build: [
      "Define the bridge challenge",
      "Create the first design",
      "Build the bridge",
      "Apply test loads",
      "Record the result",
      "Identify weak points",
      "Redesign and retest",
    ],

    challenge:
      "Can you build a bridge that carries the maximum weight using the same amount of paper?",

    upgrades: [
      "Introduce span limits",
      "Use fewer sheets",
      "Compare different structures",
      "Create a team competition",
    ],

    outcomes: [
      "Structural thinking",
      "Engineering design",
      "Measurement",
      "Testing",
      "Teamwork",
      "Problem solving",
    ],
  },
};

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    return (
      <main className="project-not-found">
        <div>
          <h1>Project not found</h1>
          <p>This project is not available yet.</p>

          <Link href="/projects">
            <ArrowLeft size={17} />
            Back to Project Library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail-page">

      {/* NAVBAR */}

      <nav className="site-nav">
        <div className="nav-inner">

          <Link href="/" className="logo">
            SHIKSHAM<span>DEHI</span>
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/projects" className="active">
              Projects
            </Link>
            <Link href="/#schools">For Schools</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <Link href="/#contact" className="nav-cta">
            Partner With Us
          </Link>

        </div>
      </nav>

      {/* HERO */}

      <section className="project-detail-hero">

        <div className="container">

          <Link href="/projects" className="project-back-link">
            <ArrowLeft size={17} />
            Project Library
          </Link>

          <div className="project-detail-grid">

            <div className="project-detail-copy">

              <div className="project-category">
                {project.category}
              </div>

              <h1>{project.title}</h1>

              <p className="project-hero-description">
                {project.concept}
              </p>

              <div className="project-info-grid">

                <div>
                  <Target size={18} />
                  <small>AGE</small>
                  <strong>{project.age}</strong>
                </div>

                <div>
                  <Wrench size={18} />
                  <small>DIFFICULTY</small>
                  <strong>{project.difficulty}</strong>
                </div>

                <div>
                  <Clock3 size={18} />
                  <small>DURATION</small>
                  <strong>{project.duration}</strong>
                </div>

              </div>

            </div>

            <div className="project-detail-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-image-badge">
                HANDS-ON
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROBLEM */}

      <section className="project-problem-section">

        <div className="container">

          <div className="problem-box">

            <div className="problem-icon">
              <Lightbulb size={25} />
            </div>

            <div>
              <div className="section-eyebrow">
                <span></span>
                REAL-WORLD PROBLEM
              </div>

              <h2>{project.problem}</h2>
            </div>

          </div>

        </div>

      </section>

      {/* LEARNING */}

      <section className="project-detail-section">

        <div className="container">

          <div className="project-section-heading">

            <div>
              <div className="section-eyebrow">
                <span></span>
                WHAT STUDENTS LEARN
              </div>

              <h2>
                Knowledge becomes
                <br />
                <em>practical skill.</em>
              </h2>
            </div>

            <p>
              Students learn by actually using the concepts inside the
              project rather than studying them in isolation.
            </p>

          </div>

          <div className="project-learning-grid">

            {project.learn.map((item, index) => (
              <div key={item}>

                <span>0{index + 1}</span>

                <CheckCircle2 size={19} />

                <p>{item}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* COMPONENTS */}

      <section className="project-components-section">

        <div className="container">

          <div className="components-box">

            <div>
              <div className="section-eyebrow">
                <span></span>
                COMPONENTS & TOOLS
              </div>

              <h2>
                What do we
                <br />
                <em>need?</em>
              </h2>
            </div>

            <div className="components-list">

              {project.components.map((component) => (
                <div key={component}>
                  <Package size={17} />
                  <span>{component}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* BUILD STEPS */}

      <section className="project-build-section">

        <div className="container">

          <div className="section-eyebrow">
            <span></span>
            BUILD PROCESS
          </div>

          <h2>
            From idea to
            <br />
            <em>working prototype.</em>
          </h2>

          <div className="build-steps">

            {project.build.map((step, index) => (
              <div className="build-step" key={step}>

                <div className="build-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p>{step}</p>

                {index !== project.build.length - 1 && (
                  <ArrowRight className="build-arrow" size={17} />
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CHALLENGE */}

      <section className="project-challenge-section">

        <div className="container">

          <div className="challenge-box">

            <div className="section-eyebrow">
              <span></span>
              MAKER CHALLENGE
            </div>

            <h2>
              Now make it
              <br />
              <em>better.</em>
            </h2>

            <p>{project.challenge}</p>

          </div>

        </div>

      </section>

      {/* UPGRADES */}

      <section className="project-upgrades-section">

        <div className="container">

          <div className="project-section-heading">

            <div>
              <div className="section-eyebrow">
                <span></span>
                POSSIBLE UPGRADES
              </div>

              <h2>
                Don't stop at
                <br />
                <em>the first version.</em>
              </h2>
            </div>

            <p>
              The first prototype is only the beginning. Students can
              extend the project and create their own improved version.
            </p>

          </div>

          <div className="upgrade-grid">

            {project.upgrades.map((upgrade, index) => (
              <div key={upgrade}>

                <strong>0{index + 1}</strong>

                <h3>{upgrade}</h3>

                <ArrowRight size={18} />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* OUTCOMES */}

      <section className="project-outcomes-section">

        <div className="container">

          <div className="outcomes-box">

            <div>
              <div className="section-eyebrow">
                <span></span>
                LEARNING OUTCOMES
              </div>

              <h2>
                Students leave with
                <br />
                <em>something they built.</em>
              </h2>
            </div>

            <div className="outcome-list">

              {project.outcomes.map((outcome) => (
                <span key={outcome}>
                  <CheckCircle2 size={16} />
                  {outcome}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="project-detail-cta">

        <div className="container">

          <div className="project-detail-cta-box">

            <div>
              <div className="section-eyebrow">
                <span></span>
                BUILD WITH SHIKSHAMDEHI
              </div>

              <h2>
                Want your students
                <br />
                to build this?
              </h2>

              <p>
                We can conduct this project as a workshop, bootcamp or
                part of a long-term school program.
              </p>
            </div>

            <Link
              href="/#contact"
              className="project-cta-button"
            >
              Enquire Now
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="site-footer">

        <div className="container">

          <div className="footer-inner">

            <Link href="/" className="logo">
              SHIKSHAM<span>DEHI</span>
            </Link>

            <p>
              Learn it. Build it. Make it real.
            </p>

            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/#schools">For Schools</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </div>

          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} ShikshamDehi. All rights reserved.
            </span>

            <span>
              Practical Learning • STEM • Innovation
            </span>
          </div>

        </div>

      </footer>

    </main>
  );
}
