import Hero from "@/app/components/home/Hero";
import Sambutan from "@/app/components/home/Sambutan";
import Programs from "@/app/components/home/Programs";
import ProfilSekolah from "@/app/components/home/ProfilSekolah";
import Fasilitas from "@/app/components/home/Fasilitas";
import PPDB from "@/app/components/home/PPDB";
import FAQ from "@/app/components/home/FAQ";
import Kontak from "@/app/components/home/Kontak";

export default function Home() {
  return (
    <>
      <Hero />
      <Sambutan />
      <Programs />
      <ProfilSekolah />
      <Fasilitas />
      <PPDB />
      <FAQ />
      <Kontak />
    </>
  );
}
