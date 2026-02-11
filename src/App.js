import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [ecosystems, setEcosystems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEcosystems();
    }, []);

    const fetchEcosystems = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/ecosystems');
            const data = await response.json();
            setEcosystems(data);
        } catch (error) {
            console.error('Error fetching ecosystems:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>VersaCore AI</h1>
                <p>Modular Ecosystems for Adaptive Business Operations</p>
            </header>
            <main className="App-main">
                <section className="dashboard">
                    <h2>My Ecosystems</h2>
                    {loading ? (
                        <p>Loading ecosystems...</p>
                    ) : ecosystems.length > 0 ? (
                        <ul>
                            {ecosystems.map((ecosystem, index) => (
                                <li key={index}>{ecosystem.name || 'Unnamed Ecosystem'}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No ecosystems yet. Create one to get started!</p>
                    )}
                </section>
                <section className="features">
                    <h2>Key Features</h2>
                    <ul>
                        <li>🎨 Mode Graph Builder - Visualize your business modes</li>
                        <li>📦 Module Library - Access 10+ modular components</li>
                        <li>⚙️ Physics & Econ Sim - Real-time collision & ROI analysis</li>
                        <li>📋 SOP Generator - Auto-generate standard operating procedures</li>
                        <li>🛠️ BOM Calculator - Automatic bill of materials with pricing</li>
                        <li>📤 File Export - PDF, DXF, JSON, XLSX exports</li>
                        <li>🏪 Marketplace - Buy, sell, and share custom modules</li>
                        <li>♻️ Sustainability - Eco-rating & circular design pathways</li>
                    </ul>
                </section>
                <section className="cta">
                    <button className="btn-primary">Create New Ecosystem</button>
                    <button className="btn-secondary">Browse Examples</button>
                    <button className="btn-secondary">Learn More</button>
                </section>
            </main>
            <footer className="App-footer">
                <p>&copy; 2026 VersaCore AI. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;