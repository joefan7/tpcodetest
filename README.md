
# Peaksware Javascript Code Test

Please build a single page application to visualize the workout data provided in `workout-data.json`, including a map, a graph, and an algorithm to analyze average power output.

## Algorithm
- Write the most efficient method that finds the "best" 20 minute power effort.
- "Best" is defined as highest continuous average for the given time period.

## User Interface
- Display the gps path on a Map
- Display the power output over time on a graph, using time as the X axis
- When user selects a range of time on the graph, highlight the corresponding range on the map
- Display the 1, 5, 10, 15, and 20 minute "best" efforts

## Hints
The purpose of this test is to demonstrate your understanding of JavaScript web application patterns and best practices, efficient algorithms, and general clean coding habits. We realize this interview question can be a substantial task. To save time, do not focus too much on CSS styling, layouts, boundary use cases, etc. You are free to use whatever frameworks and libraries you like.

## Submission
Please submit your test as an emailed zip file or link to a private repo or private file sharing system. You can also provide a hosted link or it can run locally.

## Development Notes
- Application will consist of the following modules
    - Map
    - Graph
    - Algorithm

- TDD/BDD
    - Mocha Testing Framework

- Google Maps Roads API
    - API Key - AIzaSyD7LZBi6g9f30mqPrufCMuk54EBnDgt6G8
    - Takes up to 100 GPS points for the route
    - With 5,002 samples in data must use every 50th sample (dispersion factor) to generate path for map 
        - y = number of samples in the file
        - Math.floor(y/100) is the "dispersion" factor
    - Use the "interpolate" parameter to snap to actual roads on the map (interpolate = true)
    - Form of request
        - https://roads.googleapis.com/v1/snapToRoads?parameters&key=YOUR_API_KEY
    - Sample request
        - https://roads.googleapis.com/v1/snapToRoads?path=-35.27801,149.12958|-35.28032,149.12907|-35.28099,149.12929|-35.28144,149.12984|-35.28194,149.13003|-35.28282,149.12956|-35.28302,149.12881|-35.28473,149.12836&interpolate=true&key=AIzaSyDiAnwi6vz8F_jrcZclO3IjhDkXdAwPVf4

- JSON Data
    - Time span 1 hour 25 minutes 48 seconds

    - Number of Samples during Time Span 5012

    - "millisecondOffset": 1000 - 5148000
    
    - Possible values in each sample
        - "heartRate"
        - "cadence"
        - "power"
        - "temperature"
        - "elevation"
        - "distance"
        - "speed"
        - "positionLat"
        - "positionLong"
    
    - Values needed for application
        - power
        - millisecondOffset
        - positionLat
            - Number of samples with this value 5,002
        - positionLong
            - Number of samples with this value 5,002

    - Starting Position for Map (at 4 seconds or 4000 milisecondOffset)
        - "positionLat": 40.01488, "positionLong": -105.131

