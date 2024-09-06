import Image from 'next/image';
import logoSrc from '../components/public/mega-sena.png'; 

const MegaSenaLogo = () => (
  <div style={{ textAlign: 'center', margin: '20px 0' }}>
    <Image src={logoSrc} alt="Logo Mega Sena" width={500} height={500} />
  </div>
);

export default MegaSenaLogo;
