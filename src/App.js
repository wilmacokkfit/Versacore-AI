import React from 'react';

const App = () => {
    const ecosystemList = ['Cloud Services', 'AI Models', 'Data Analytics', 'Integration Tools'];
    const features = ['Real-time Insights', 'Scalable Solutions', 'User-friendly Interface', 'Robust Security'];

    return (
        <div>
            <h1>VersaCore AI Dashboard</h1>
            <section>
                <h2>Ecosystem</h2>
                <ul>
                    {ecosystemList.map((ecosystem, index) => (
                        <li key={index}>{ecosystem}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Features</h2>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Get Started</h2>
                <button onClick={() => alert('Sign Up for Free!')}>Sign Up</button>
                <button onClick={() => alert('Contact Us')}>Contact Us</button>
            </section>
        </div>
    );
};

export default App;