import PixelCard from '../utils/pixelcard.jsx';

const TEAM = [
  { name: 'Dolly Srivastava', role: 'Project Head', image: '/src/assets/dolly.png', github: 'https://github.com/idkdolly' },
  { name: 'Sarthak Malhotra', role: 'Cipher Team', image: '/src/assets/sarthak.png', github: 'https://github.com/Sarthak-Malhotra' },
  { name: 'Akshita Dhiman', role: 'UI/UX', image: '/src/assets/akshita.png' },
  { name: 'Tanishq Bhatnagar', role: 'UI/UX', image: '/src/assets/tanishq.png', github: 'https://github.com/TanishqBhatnagar312' },
  { name: 'Yuvika Sachdeva', role: 'Cipher Team', image: '/src/assets/yuvika.png', github: 'https://github.com/YuvikaSachdeva' },
  { name: 'Amisha Upadhyay', role: 'UI/UX', image: '/src/assets/amisha.png', github: 'https://github.com/amishau209-carat' },
  { name: 'Dwijesh Chilukuri', role: 'UI/UX', image: '/src/assets/dwijesh.png', github: 'https://github.com/just-dwijesh' },
  { name: 'Anukriti Verma', role: 'UI/UX', image: '/src/assets/anukriti.png', github: 'anukritiverma236-hub' }
];

export default function TeamPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: '8rem 2rem 4rem',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: 30, fontWeight: 'bold' }}>Our Awesome Team</h1>
        <p style={{ color: '#9ca3af', marginTop: '1rem', fontSize: '1.25rem', maxWidth: '600px', textAlign: 'center' }}>
          We are a group of passionate developers, designers, and thinkers building the future, one pixel at a time.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {TEAM.map((member) => (
          <PixelCard key={member.name} variant="default">
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: -1,
              borderRadius: '25px',
              overflow: 'hidden'
            }}>
              <img
                src={member.image}
                alt={member.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)'
              }} />
            </div>

            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              textAlign: 'center',
              padding: '2rem 1rem',
              zIndex: 10,
              pointerEvents: 'none'
            }}>
              <h2 style={{ margin: '0 0 0.25rem 0', fontSize: '1.75rem', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                {member.name}
              </h2>
              <p style={{ margin: 0, color: '#ffa212', fontSize: '1.125rem', fontWeight: 'bold', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
                {member.role}
              </p>
            </div>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
