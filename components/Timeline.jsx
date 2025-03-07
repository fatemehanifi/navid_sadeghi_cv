import React from 'react';
import './Timeline.module.css';

const Timeline = () => {

    const events = [
        { title: 'Step 1', description: 'First step description' },
        { title: 'Step 2', description: 'Second step description' },
        { title: 'Step 3', description: 'Third step description' },
        // ...
    ];

    return (
        <div className="curly-timeline-container">
            {events.map((event, index) => {
                const isLast = index === events.length - 1;
                return (
                    <div key={index} className="curly-timeline-item">
                        {/* Dot for each timeline event */}
                        <div className="curly-timeline-marker">
                            <div className="curly-timeline-dot"></div>
                        </div>

                        {/* Event content */}
                        <div className="curly-timeline-content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>

                        {/* Curly connector to next event (unless this is the last one) */}
                        {!isLast && (
                            <svg
                                className="curly-timeline-connector"
                                viewBox="0 0 50 120"
                                preserveAspectRatio="none"
                            >
                                {/*
                                  This path is just one example of a curly line.
                                  Adjust the "C" (cubic bezier) control points to get
                                  more or fewer curls.
                                */}
                                <path
                                    d="
                                    M 25,0
                                    C 45,20   5,40   25,60
                                    C 45,80   5,100  25,120
                                  "
                                    stroke="#333"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
