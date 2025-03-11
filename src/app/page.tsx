import Dashboard from "@/components/Dashboard";
import Hero from "@/components/Hero";
import WelcomeForm from "@/components/WelcomeForm";


export default function Home() {
  return (
    <>
      <WelcomeForm/>
      <Hero />
      <Dashboard/>
    </>
  );
}
