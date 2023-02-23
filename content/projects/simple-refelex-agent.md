---
title: 'Temperature Probe Reflex Agent'
description: 'Simple AI agent which reacts to changes in its environment.'
dateString: Jan 2023
draft: false
tags:
  [
    'Arduino',
    'AI',
    'C++',
    'Computer science',
    'class',
    'project',
    'Articial Intelligence',
  ]
showToc: false
weight: 203
cover:
  image: 'projects/simple-reflex-agent/cover.jpg'
---

![Build](https://img.shields.io/github/actions/workflow/status/CMPSC-310-AI-Spring2023/temperature-reflex-agent/main.yml)

### 🔗 [Repository Link](https://github.com/CMPSC-310-AI-Spring2023/temperature-reflex-agent/)

## Description

For a project in my CMPSC 310 course on Artificial Intelligence, I worked with a partner to create a simple reflex agent. The application we developed was a temperature sensing module that uses an Arduino Uno board and a temperature sensor to monitor the ambient temperature of a room. The module will alert the user via the LED module if the temperature exceeds a certain range, specifically, if it is more than 5 degrees Celsius higher or lower than the ideal temperature of 20 degrees Celsius.

## Agents

The term "agent" in the context of artificial intelligence refers to an entity that can perceive its environment and take actions to achieve specific goals. In this case, the temperature sensing module can be considered an agent, as it perceives the ambient temperature and takes action to alert the user if it exceeds a certain range.

The characteristics/attributes of this agent include its ability to sense temperature using a temperature sensor, process the sensor data using an Arduino, and take action by activating an LED module to alert the user. Additionally, the agent can be programmed to follow certain rules or algorithms to determine when to trigger an alert.

The temperature sensing module can be classified as a reflex agent, which means that it responds to the current state of the environment without maintaining an internal model of the world. In other words, it does not make predictions about future states of the environment, but rather takes action based on the current sensory input.

The environment task for this agent can be described using the PEAS framework:

**Performance measure:** The agent's goal is to maintain the ambient temperature within a certain range (+/- 5C from 20C). The agent's performance measure is how well it achieves this goal, which is measured by the number of times it correctly alerts the user when the temperature exceeds the specified range.

**Environment:** The agent operates in an environment that consists of the temperature sensor and the ambient temperature. The temperature sensor provides input to the agent, and the ambient temperature is what the agent is trying to regulate.

**Actuators:** The agent's actuators are the LED module, which it uses to alert the user if the temperature exceeds the specified range.

**Sensors:** The agent's sensors are the temperature sensor, which provides input to the agent about the current ambient temperature.

Finally, the agent can be considered rational because it takes actions that are expected to achieve its goal of maintaining the ambient temperature within the specified range. It does this by using the information provided by its sensors to make decisions about when to trigger an alert.

## Languages and Tools

When developing this project, we used what I've taken to calling the "Arduino language;" which is essentially just C++ with some special features for compatibility with the Arduino board. Further, we used an Arduino Uno board along with a TMP36 temperature probe and an LED. All of the technical writing was written in Markdown, and Git along with GitHub were used for version control.
