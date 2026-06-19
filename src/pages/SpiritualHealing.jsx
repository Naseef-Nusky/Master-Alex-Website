import ServicePageLayout from '../components/common/ServicePageLayout'

export default function SpiritualHealing() {
  return (
    <ServicePageLayout
      servicePath="/spiritual-healing"
      title="Spiritual Healing"
      showForm={false}
      intro={[
        {
          heading: 'Restore Peace and Balance with Energy Healing and Spiritual Cleansing in London',
          text: 'Without knowing the proper reason, are you confused, weary, or exhausted about the things happening in your life? If you are being pessimistic, it changes a great deal in how things happen in today’s hectic world. And that is why it is important to always surround yourself with positive energy, which is made possible by the well-known spiritual healer in London, Master Alex. He helps the people of London overcome emotional struggles, set their mind straight on their goals, and find happiness despite the dark times, through spiritual healing and energy cleansing. Master Alex’s powerful spiritual healing methods are designed to restore your inherent energy flow, restore peace, strength, and balance in your life. Find inner calm with a trusted spiritual healer in London today. Book your appointment right away and find inner peace again.',
        },
        {
          heading: 'What is Spiritual Healing?',
          text: 'Spiritual healing is a spiritual process undertaken by Master Alex to help your body, mind, and spirit cooperate peacefully. This in turn removes negative energy. Having years of experience as a spiritual healer in London, Master Alex employs age-old energy techniques and prayers to unload emotional baggage and enable the development of good energy. Explore more about Master Alex to find more information on his upbringing and astrological knowledge.',
        },
      ]}
      sections={[
        {
          bg: 'dark',
          heading: 'How Energy Healing Works?',
          text: 'During an energy healing process, Master Alex transmits positive vibrations across your body. This process gets rid of all the energy blockages. The result? You feel lighter, more relaxed, and more focused towards your goals. Master Alex believes that your relationships, job, and health will also get better when your energy is balanced. The typical advantages are:',
          list: [
            'Stress and worry alleviation',
            'Better emotional stability and sleeping habits',
            'Improved internal confidence and concentration',
            'A closer spiritual bond',
          ],
        },
        {
          bg: 'surface',
          heading: 'Why opt for an Energy Healer in London?',
          text: 'Experienced energy healer in London Master Alex provides in-person and remote healing treatments. His method fits modern life by blending deep spiritual understanding with venerable customs. His healing renews your inner strength and cleans your energy field whether you are suffering emotional agony, relationship problems, or mental strain. You may also look into negative energy removal solutions for more thorough spiritual cleansing if you sometimes find yourself surrounded by bad or unrelenting exhaustion.',
          cta: 'whatsapp',
        },
        {
          bg: 'white',
          heading: 'Discover the Might of Spiritual Purification',
          text: 'Spiritual cleansing is quite different from spiritual healing. Spiritual cleansing gets rid of all the unfavourable vibes from your aura, your home, your personal space, and even your office. This process is done so that you are always surrounded with good energy. Personalized to fit the spiritual needs of every individual, Master Alex’s healing treatments guarantee long-lasting results and emotional balance.',
          cta: 'call',
        },
        {
          bg: 'surface',
          heading: 'Book Energy Healing and Spiritual Cleansing Consultations Today!',
          text: 'If you book your consultation with Master Alex, you will stop feeling emotionally burdened. This lets you feel more positive again, fills your life with happy and peaceful moments, and you are likely to achieve more success than before. Begin your path towards a more upbeat life by booking your energy healing and spiritual cleansing consultations today.',
          cta: 'whatsapp',
          image: true,
          reverse: true,
        },
        {
          bg: 'dark',
          form: true,
          heading: 'Contact Us Now',
        },
      ]}
    />
  )
}
