'use client'

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export function PortifolioHeader () {

    const redirectToLinkedin = () => {
     window.location.href = "https://www.linkedin.com/in/rafael-mesquita-9b8798193/";
    }

    const redirectToGithub = () => {
     window.location.href = "https://github.com/RafaelNAIP";
    }

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV_Rafael_Mesquita.pdf';
        link.download = 'CV_Rafael_Mesquita.pdf';
        link.click();
    }

    return (
    <header className="h-18 w-full flex items-center pl-4 pr-10 justify-between border-b border-b-gray-300">
        <h1 className="text-xl font-bold text-foreground">Rafael Mesquita</h1>
        <div className="w-60 flex justify-between">
          <button onClick={redirectToLinkedin} className="cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <LinkedInIcon color="info" fontSize="large" />
          </button>
          <button  onClick={redirectToGithub} className="cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <GitHubIcon fontSize="large" />
          </button>
          <button onClick={handleResumeDownload} className="bg-[#008a91] p-2 rounded-md text-white text-sm w-30 flex justify-between pl-5 pr-5 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <FileDownloadIcon htmlColor="#FFFFFF" fontSize="small" />
            Resume
          </button>
        </div>
    </header>
    )
}