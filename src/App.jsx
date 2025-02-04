import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const sectionStyle = (isActive) => ({
    padding: '10px 20px',
    backgroundColor: isActive ? '#1976d2' : 'transparent',
    color: isActive ? 'white' : '#1976d2',
    border: `1px solid ${isActive ? '#1976d2' : '#ddd'}`,
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 5px',
  });

  const renderOverview = () => (
    <div>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{ 
          color: '#1976d2',
          fontSize: '2.5em',
          marginBottom: '10px'
        }}>
          Bradley W. Merrill
        </h1>
        <h2 style={{ 
          color: '#666',
          fontWeight: 'normal',
          fontSize: '1.5em'
        }}>
          Technical Product Management - Ferrite Innovation Initiative
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '40px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Contact</h3>
          <p>📧 bwmengineer428@gmail.com</p>
          <p>
            <a href="https://github.com/Bradbuythedip" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ color: '#333', textDecoration: 'none' }}>
              🔗 GitHub Portfolio
            </a>
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Market Opportunity</h3>
          <p>Total Addressable Market: $28.7B by 2030</p>
          <p>Key Segments:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>EMI/RFI Suppression: $15.4B</li>
            <li>Power Electronics: $28.7B</li>
            <li>Wireless Charging: $12.6B</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Innovation Focus</h3>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '8px',
            justifyContent: 'center'
          }}>
            {['BJT Manufacturing', 'Adaptive Cores', 'Smart Materials', 
              'Process Control', 'Material Science', 'Market Analysis'].map((tech) => (
              <span key={tech} style={{
                backgroundColor: '#e3f2fd',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '0.9em',
                color: '#1976d2'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#1976d2', marginBottom: '30px' }}>Development Timeline</h2>
      
      {[
        {
          phase: 'Phase 1: Foundation',
          period: 'January - March 2025',
          tracks: [
            {
              name: 'Manufacturing',
              items: ['BJT System Setup', 'Process Optimization', 'Process Validation']
            },
            {
              name: 'Materials',
              items: ['Material Selection', 'Composition Optimization', 'Final Material Selection']
            }
          ]
        },
        {
          phase: 'Phase 2: Integration',
          period: 'April - June 2025',
          tracks: [
            {
              name: 'Process Development',
              items: ['Integration Setup', 'Full Integration', 'Final Integration']
            },
            {
              name: 'Product Development',
              items: ['Design Specifications', 'Initial Prototypes', 'Final Prototypes']
            }
          ]
        }
      ].map((phase) => (
        <div key={phase.phase} style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>{phase.phase}</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>{phase.period}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {phase.tracks.map((track) => (
              <div key={track.name} style={{ 
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h4 style={{ color: '#1976d2', marginBottom: '15px' }}>{track.name}</h4>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {track.items.map((item) => (
                    <li key={item} style={{ 
                      marginBottom: '8px',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        content: '""',
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#1976d2',
                        borderRadius: '50%',
                        top: '50%',
                        transform: 'translateY(-50%)'
                      }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMarket = () => (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#1976d2', marginBottom: '30px' }}>Market Analysis</h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Growth Drivers</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Electric Vehicles:</strong>
              <br />
              45M units by 2030
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>5G/6G Deployment:</strong>
              <br />
              85% coverage target by 2030
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Renewable Energy:</strong>
              <br />
              35% share target by 2030
            </li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Innovation Portfolio</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>BJT Platform:</strong>
              <br />
              3.2x expected return
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Adaptive Cores:</strong>
              <br />
              4.5x expected return
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Smart Materials:</strong>
              <br />
              2.8x expected return
            </li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Target Metrics</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Market Share:</strong> 20% by 2028
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Revenue Growth:</strong> 15% annually
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Innovation Revenue:</strong> 25% of total
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Customer Retention:</strong> 92% target
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderTechnical = () => (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#1976d2', marginBottom: '30px' }}>Technical Innovation: Adaptive Ferrite Core System</h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Core Technology</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Structure:</strong>
              <br />
              Segmented core with independent control
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Manufacturing:</strong>
              <br />
              Advanced BJT process with multi-material capability
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Integration:</strong>
              <br />
              Thermal management and field sensing layers
            </li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Performance Targets</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Efficiency:</strong>
              <br />
              >93% power transfer efficiency
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Position Tolerance:</strong>
              <br />
              ±20mm
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Thermal Stability:</strong>
              <br />
              <50°C rise
            </li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Material Properties</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Base Material:</strong>
              <br />
              Mn-Zn ferrite with enhanced additives
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Permeability:</strong>
              <br />
              Initial relative permeability >2000
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Core Loss:</strong>
              <br />
              <100 mW/cm³
            </li>
          </ul>
        </div>
      </div>

      <div style={{ 
        marginTop: '30px',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Manufacturing Process</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {[
            'Powder Preparation',
            '→',
            'BJT Printing',
            '→',
            'Green Part Processing',
            '→',
            'Controlled Sintering',
            '→',
            'Assembly & Integration'
          ].map((step, index) => (
            <div key={index} style={{
              padding: step === '→' ? '5px' : '10px 20px',
              backgroundColor: step === '→' ? 'transparent' : '#1976d2',
              color: step === '→' ? '#1976d2' : 'white',
              borderRadius: '20px',
              fontSize: '0.9em'
            }}>
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStrategy = () => (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#1976d2', marginBottom: '30px' }}>Strategic Innovation Plan</h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Investment Requirements</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Initial Research:</strong>
              <br />
              $1.2M (12 months)
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Development:</strong>
              <br />
              $2.5M (18 months)
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Commercialization:</strong>
              <br />
              $1.8M (12 months)
            </li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Revenue Projections</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>2025:</strong>
              <br />
              Base: $5.2M | Optimistic: $7.1M
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>2026:</strong>
              <br />
              Base: $12.5M | Optimistic: $15.8M
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>2027:</strong>
              <br />
              Base: $22.8M | Optimistic: $28.4M
            </li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Critical Success Factors</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Technical:</strong>
              <br />
              Process control excellence
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>IP Strategy:</strong>
              <br />
              Strong patent protection
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Market:</strong>
              <br />
              Early customer engagement
            </li>
          </ul>
        </div>
      </div>

      <div style={{ 
        marginTop: '30px',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Next Steps</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {[
            { title: 'Team Formation', desc: 'Assemble development team' },
            { title: 'Funding', desc: 'Secure initial investment' },
            { title: 'Partnerships', desc: 'Establish key collaborations' },
            { title: 'Pilot Program', desc: 'Initialize testing phase' }
          ].map((step, index) => (
            <div key={index} style={{
              backgroundColor: '#e3f2fd',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <strong style={{ color: '#1976d2' }}>{step.title}</strong>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9em' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <nav style={{
        backgroundColor: 'white',
        padding: '20px',
        marginBottom: '30px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'technical', label: 'Technical Innovation' },
            { id: 'timeline', label: 'Timeline' },
            { id: 'market', label: 'Market Analysis' },
            { id: 'strategy', label: 'Strategy' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={sectionStyle(activeSection === section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '40px',
          marginBottom: '2rem'
        }}>
          {activeSection === 'overview' && renderOverview()}
          {activeSection === 'technical' && renderTechnical()}
          {activeSection === 'timeline' && renderTimeline()}
          {activeSection === 'market' && renderMarket()}
          {activeSection === 'strategy' && renderStrategy()}
        </div>
      </main>
    </div>
  );
}

export default App;
