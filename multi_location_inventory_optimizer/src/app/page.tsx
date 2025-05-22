import DashboardContent from '@/components/dashboard/DashboardContent';
import MainContainer from '@/components/layout/MainContainer';

export default function Home() {
  return (
    <MainContainer pageTitle="Dashboard">
      <DashboardContent />
    </MainContainer>
  );
}
