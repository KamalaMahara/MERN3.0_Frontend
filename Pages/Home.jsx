import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

const Home = () => {
  const cards = [
    {
      title: "The AI Gender Gap: Data Bias in Code",
      description: "How skewed datasets and a lack of diversity in IT are embedding gender bias into the future of Artificial Intelligence.",
      img: "https://cdn.mos.cms.futurecdn.net/DVffQnnibMWmNpx2Wfb5Se-1920-80.jpg"
    },
    {
      title: "GovTech 2.0: Smart Cities, Better Rights?",
      description: "Exploring how new government IT initiatives and tech (GovTech) must prioritize citizen rights, privacy, and equality, not just efficiency.",
      img: "https://blog.aquartia.in/wp-content/uploads/2025/02/smart-city.webp"
    },
    {
      title: "IT Skills: The New Rights Battleground",
      description: "HA look at why digital literacy and access to tech education are crucial for women's economic and political empowerment today.ow skewed datasets and a lack of diversity in IT are embedding gender bias into the future of Artificial Intelligence.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79mfEwfIQuZvTnD-LUUpiKd8mxIKMD1a1WA&s"
    },
    {
      title: ". Decoding Democracy: Can AI Fight Misinformation?",
      description: "How Examining the government's role in leveraging or regulating AI to combat the spread of deepfakes and political disinformation online.skewed datasets and a lack of diversity in IT are embedding gender bias into the future of Artificial Intelligence.",
      img: "https://d12aarmt01l54a.cloudfront.net/cms/images/Media-20210212093146/808-440.png"
    },
    {
      title: "Algorithms & Accountability: Who Governs AI?",
      description: "How skewed datasets and a lack of diversity in A concise breakdown of the urgent need for governments to establish clear rules and ethical frameworks to manage AI's growing power.IT are embedding gender bias into the future of Artificial Intelligence.",
      img: "https://www.isss.org.uk/wp-content/uploads/2025/01/caigo-1.jpg"
    },
    {
      title: "Tech's Trojan Horse: Surveillance & Rights",
      description: "Exploring the risk to women's and human rights when government agencies use data collected by mass surveillance IT.",
      img: "https://www.csoonline.com/wp-content/uploads/2023/06/trojan-horse_malware_virus_binary_by-v-graphix-getty-100799531-orig.jpg?quality=50&strip=all"
    }
  ];
  return (
    <>
      <Navbar />
      <div className='flex  flex-wrap gap-8 justify-center mt-20 mb-14'>
        {cards.map((elem) => {
          return <Cards title={elem.title} description={elem.description} img={elem.img} />
        })}
      </div>
    </>
  )
}

export default Home