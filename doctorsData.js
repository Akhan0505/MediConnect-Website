// Doctors Database - doctorsData.js

const doctorsData = [
    // Dermatologists
    {
        id: 1,
        name: "Dr. Attia Tabassum",
        specialization: "Dermatology",
        city: "Lahore",
        rating: 4.9,
        experience: 10,
        image: "assets/images/doctor1.jpg",
        fees: 1500,
        availability: ["09:00", "10:30", "14:00", "15:30", "17:00"],
        education: "M.B.B.S., F.C.P.S (Dermatology)",
        languages: ["English", "Urdu"],
        consultationType: "Online Video Consultation",
        waitTime: "Under 15 Min",
        satisfactionRate: "99% (659)",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Fatima Ali",
                rating: 5,
                comment: "Dr. Tabassum is excellent with skin treatments. Very professional and caring.",
                date: "2024-01-15"
            },
            {
                name: "Ahmed Hassan",
                rating: 5,
                comment: "Great dermatologist. Solved my skin problems effectively.",
                date: "2024-01-10"
            }
        ]
    },
    {
        id: 2,
        name: "Dr. Saira Jabeen",
        specialization: "Dermatology",
        city: "Lahore",
        rating: 5.0,
        experience: 8,
        image: "assets/images/doctor2.jpg",
        fees: 1500,
        availability: ["08:00", "09:30", "13:00", "16:00", "18:00"],
        education: "MBBS, FCPS (Dermatology)",
        languages: ["English", "Urdu"],
        consultationType: "Online Video Consultation",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (72)",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sana Khan",
                rating: 5,
                comment: "Dr. Jabeen is very knowledgeable and explains everything clearly.",
                date: "2024-01-20"
            },
            {
                name: "Ali Raza",
                rating: 5,
                comment: "Excellent treatment and very professional approach.",
                date: "2024-01-18"
            }
        ]
    },
    {
        id: 3,
        name: "Dr. Syed Adeel Ur Rehman",
        specialization: "Dermatology",
        city: "Karachi",
        rating: 4.8,
        experience: 12,
        image: "assets/images/doctor3.jpg",
        fees: 1200,
        availability: ["10:00", "11:30", "14:30", "16:30", "17:30"],
        education: "M.B.B.S., Fellow Medical Dermatology (USA)",
        languages: ["English", "Urdu"],
        consultationType: "Derm MD Care (Gulshan e Iqbal)",
        waitTime: "Under 15 Min",
        satisfactionRate: "98% (3084)",
        subspecialty: "Aesthetic Physician, Laser Specialist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Zara Ahmed",
                rating: 5,
                comment: "Dr. Rehman is very skilled and provides excellent laser treatments.",
                date: "2024-01-22"
            },
            {
                name: "Owais Sheikh",
                rating: 5,
                comment: "Great dermatologist with modern treatment methods.",
                date: "2024-01-19"
            }
        ]
    },
    {
        id: 4,
        name: "Dr. Salman Mansoor",
        specialization: "Dermatology",
        city: "Karachi",
        rating: 4.7,
        experience: 24,
        image: "assets/images/doctor4.jpg",
        fees: 2500,
        availability: ["09:00", "11:00", "13:30", "15:00", "16:30"],
        education: "MBBS, MD (USA), D Derm (London), DRCP Derm (London)",
        languages: ["English", "Urdu"],
        consultationType: "The Skin (DHA, Phase 6)",
        waitTime: "Under 15 Min",
        satisfactionRate: "94% (6172)",
        subspecialty: "Aesthetic Physician, Laser Specialist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Hina Malik",
                rating: 5,
                comment: "Dr. Mansoor is highly experienced and provides excellent aesthetic treatments.",
                date: "2024-01-25"
            },
            {
                name: "Kamran Ali",
                rating: 4,
                comment: "Very professional and skilled in advanced dermatology procedures.",
                date: "2024-01-21"
            }
        ]
    },
    {
        id: 5,
        name: "Dr. Lubna Rani",
        specialization: "Dermatology",
        city: "Islamabad",
        rating: 4.9,
        experience: 16,
        image: "assets/images/doctor5.jpg",
        fees: 1500,
        availability: ["08:30", "10:00", "13:00", "15:30", "17:00"],
        education: "MBBS, FCPS (Dermatology), MHPE",
        languages: ["English", "Urdu"],
        consultationType: "Riphah IIMCT",
        waitTime: "15 - 30 Min",
        satisfactionRate: "98% (57)",
        subspecialty: "Cosmetologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211286.6789123456!2d73.04329!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Ayesha Tariq",
                rating: 5,
                comment: "Dr. Rani is very thorough and provides excellent cosmetic treatments.",
                date: "2024-01-28"
            },
            {
                name: "Bilal Khan",
                rating: 5,
                comment: "Great experience with Dr. Rani. Very professional and caring.",
                date: "2024-01-26"
            }
        ]
    },
    {
        id: 6,
        name: "Dr. Muhammad Khurram Ahmad",
        specialization: "Dermatology",
        city: "Islamabad",
        rating: 5.0,
        experience: 35,
        image: "assets/images/doctor6.jpg",
        fees: 4400,
        availability: ["09:30", "11:30", "14:00", "16:00", "18:30"],
        education: "MBBS, FCPS (Dermatology)",
        languages: ["English", "Urdu"],
        consultationType: "Shifa International Hospitals",
        waitTime: "15 - 30 Min",
        satisfactionRate: "100% (75)",
        subspecialty: "Aesthetic Physician, Laser Specialist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211286.6789123456!2d73.04329!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Farah Noor",
                rating: 5,
                comment: "Dr. Ahmad is highly experienced and provides top-quality dermatological care.",
                date: "2024-01-30"
            },
            {
                name: "Usman Ghani",
                rating: 5,
                comment: "Excellent doctor with vast experience in dermatology and laser treatments.",
                date: "2024-01-27"
            }
        ]
    },
    {
        id: 7,
        name: "Dr. Anum Sadia",
        specialization: "Dermatology",
        city: "Karachi",
        rating: 4.8,
        experience: 10,
        image: "assets/images/doctor7.jpg",
        fees: 1200,
        availability: ["09:00", "11:00", "14:30", "16:00", "18:00"],
        education: "M.B.B.S., F.C.P.S (Dermatology)",
        languages: ["English", "Urdu"],
        consultationType: "Online Consultation",
        waitTime: "Under 15 Min",
        satisfactionRate: "98% (50)",
        subspecialty: "Cosmetologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sana Aslam",
                rating: 5,
                comment: "Dr. Sadia provides excellent dermatological care with modern techniques.",
                date: "2024-02-01"
            }
        ]
    },
    {
        id: 8,
        name: "Dr. Abdul Latif Khan Niazi",
        specialization: "Dermatology",
        city: "Karachi",
        rating: 5.0,
        experience: 33,
        image: "assets/images/doctor8.jpg",
        fees: 1500,
        availability: ["08:00", "10:00", "13:30", "15:30", "17:00"],
        education: "MBBS, DDV (Austria)",
        languages: ["English", "Urdu"],
        consultationType: "Online Consultation",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (29)",
        subspecialty: "Cosmetologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Khalid Mahmood",
                rating: 5,
                comment: "Dr. Niazi has extensive experience and provides exceptional dermatological care.",
                date: "2024-02-02"
            }
        ]
    },
    {
        id: 9,
        name: "Dr. Reema Sunil",
        specialization: "Dermatology",
        city: "Karachi",
        rating: 5.0,
        experience: 5,
        image: "assets/images/doctor9.jpg",
        fees: 2000,
        availability: ["10:00", "12:00", "14:00", "16:30", "18:30"],
        education: "MBBS, Dermatology",
        languages: ["English", "Urdu"],
        consultationType: "Derm MD Care (Clifton)",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (23)",
        subspecialty: "Dermatologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Faiza Sheikh",
                rating: 5,
                comment: "Dr. Sunil is very professional and provides excellent skin treatments.",
                date: "2024-02-03"
            }
        ]
    },

    // Gynecologists
    {
        id: 10,
        name: "Dr. Mehjabeen",
        specialization: "Gynecology",
        city: "Karachi",
        rating: 4.9,
        experience: 7,
        image: "assets/images/doctor10.jpg",
        fees: 1000,
        availability: ["10:00", "12:00", "14:00", "16:00", "18:00"],
        education: "M.B.B.S, M.C.P.S (Gynecology & Obstetrician)",
        languages: ["English", "Urdu"],
        consultationType: "Atiya General Hospital",
        waitTime: "Under 15 Min",
        satisfactionRate: "99% (1583)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sadia Malik",
                rating: 5,
                comment: "Dr. Mehjabeen is very caring and provides excellent gynecological care.",
                date: "2024-02-01"
            },
            {
                name: "Nadia Ali",
                rating: 5,
                comment: "Great doctor with compassionate approach to women's health.",
                date: "2024-01-29"
            }
        ]
    },
    {
        id: 11,
        name: "Dr. Naseem Nabeel",
        specialization: "Gynecology",
        city: "Karachi",
        rating: 5.0,
        experience: 18,
        image: "assets/images/doctor11.jpg",
        fees: 2000,
        availability: ["08:00", "10:30", "13:30", "15:00", "17:30"],
        education: "MBBS, MCPS (Gynecology and Obstetrics), MRCOG",
        languages: ["English", "Urdu"],
        consultationType: "Ibn e Seena Hospital",
        waitTime: "15 - 30 Min",
        satisfactionRate: "100% (13)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Rabia Khan",
                rating: 5,
                comment: "Dr. Nabeel is highly skilled and provides excellent obstetric care.",
                date: "2024-02-03"
            },
            {
                name: "Fiza Ahmed",
                rating: 5,
                comment: "Outstanding gynecologist with international qualifications.",
                date: "2024-02-01"
            }
        ]
    },
    {
        id: 12,
        name: "Dr. Areej Azhar Siddiqui",
        specialization: "Gynecology",
        city: "Lahore",
        rating: 5.0,
        experience: 11,
        image: "assets/images/doctor12.jpg",
        fees: 1500,
        availability: ["09:00", "11:00", "14:30", "16:30", "18:00"],
        education: "MBBS, FCPS",
        languages: ["English", "Urdu"],
        consultationType: "Niazi Poly Clinic",
        waitTime: "15 - 30 Min",
        satisfactionRate: "100% (49)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Amna Riaz",
                rating: 5,
                comment: "Dr. Siddiqui is very professional and provides excellent gynecological services.",
                date: "2024-02-05"
            },
            {
                name: "Maryam Shah",
                rating: 5,
                comment: "Great experience with Dr. Siddiqui. Very caring and knowledgeable.",
                date: "2024-02-02"
            }
        ]
    },
    {
        id: 13,
        name: "Dr. Tanzeela Rehman",
        specialization: "Gynecology",
        city: "Lahore",
        rating: 4.8,
        experience: 15,
        image: "assets/images/doctor13.jpg",
        fees: 3000,
        availability: ["10:00", "12:00", "15:00", "17:00", "19:00"],
        education: "M.B.B.S, F.C.P.S (Gynecology & Obstetrics)",
        languages: ["English", "Urdu"],
        consultationType: "Omar Hospital and Cardiac Center",
        waitTime: "15 - 30 Min",
        satisfactionRate: "97% (392)",
        subspecialty: "Aesthetic Gynecologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Khadija Akram",
                rating: 5,
                comment: "Dr. Rehman specializes in aesthetic gynecology and provides excellent care.",
                date: "2024-02-07"
            },
            {
                name: "Saima Butt",
                rating: 4,
                comment: "Very skilled gynecologist with expertise in advanced procedures.",
                date: "2024-02-04"
            }
        ]
    },
    {
        id: 14,
        name: "Prof. Dr. Saira Afghan",
        specialization: "Gynecology",
        city: "Islamabad",
        rating: 4.8,
        experience: 39,
        image: "assets/images/doctor14.jpg",
        fees: 2000,
        availability: ["08:00", "10:00", "13:00", "15:00", "17:00"],
        education: "M.B.B.S, F.C.P.S (Gynecology & Obstetrics)",
        languages: ["English", "Urdu"],
        consultationType: "Islamabad Medical And Surgical Center",
        waitTime: "Under 15 Min",
        satisfactionRate: "97% (1148)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211286.6789123456!2d73.04329!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Rubina Akhtar",
                rating: 5,
                comment: "Prof. Dr. Afghan has vast experience and provides excellent gynecological care.",
                date: "2024-02-08"
            }
        ]
    },
    {
        id: 15,
        name: "Lt. Col (R) Assoc. Prof. Dr. Sadia Arif",
        specialization: "Gynecology",
        city: "Islamabad",
        rating: 4.9,
        experience: 25,
        image: "assets/images/doctor15.jpg",
        fees: 2000,
        availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
        education: "MBBS, DGO MCPS, FCPS, CHPE",
        languages: ["English", "Urdu"],
        consultationType: "Islamabad Gynae Center",
        waitTime: "Under 15 Min",
        satisfactionRate: "98% (447)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211286.6789123456!2d73.04329!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Shazia Malik",
                rating: 5,
                comment: "Lt. Col Dr. Arif is highly professional and provides excellent obstetric care.",
                date: "2024-02-09"
            }
        ]
    },
// Neurologists
{
    id: 16,
    name: "Dr. Huma Khan",
    specialization: "Neurology",
    city: "Karachi",
    rating: 4.9,
    experience: 6,
    image: "assets/images/doctor16.jpg",
    fees: 1200,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "M.B.B.S., F.C.P.S. (Neurology)",
    languages: ["English", "Urdu"],
    consultationType: "Zubaida Medical Center",
    waitTime: "15 - 30 Min",
    satisfactionRate: "99% (214)",
    subspecialty: "Neurologist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Sarah Ahmed",
            rating: 5,
            comment: "Dr. Khan is very skilled in neurology and provides excellent care.",
            date: "2024-02-10"
        }
    ]
},
{
    id: 17,
    name: "Dr. Deepa Kumari",
    specialization: "Neurology",
    city: "Karachi",
    rating: 4.9,
    experience: 10,
    image: "assets/images/doctor17.jpg",
    fees: 1500,
    availability: ["08:00", "10:00", "13:30", "15:30", "17:00"],
    education: "MBBS, FCPS Neurology",
    languages: ["English", "Urdu"],
    consultationType: "Karachi Adventist Hospital",
    waitTime: "Under 15 Min",
    satisfactionRate: "99% (89)",
    subspecialty: "Neurologist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Hassan Ali",
            rating: 5,
            comment: "Dr. Kumari is very professional and provides excellent neurological care.",
            date: "2024-02-11"
        }
    ]
},
{
    id: 18,
    name: "Dr. Ahmad Nawaz",
    specialization: "Neurology",
    city: "Lahore",
    rating: 5.0,
    experience: 6,
    image: "assets/images/doctor18.jpg",
    fees: 2000,
    availability: ["09:30", "11:30", "14:30", "16:30", "18:30"],
    education: "M.B.B.S., F.C.P.S. (Neurology)",
    languages: ["English", "Urdu"],
    consultationType: "Central Park Hospital",
    waitTime: "Under 15 Min",
    satisfactionRate: "100% (8)",
    subspecialty: "Neurologist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Zainab Malik",
            rating: 5,
            comment: "Dr. Nawaz is excellent and provides comprehensive neurological treatment.",
            date: "2024-02-12"
        }
    ]
},
{
    id: 19,
    name: "Assoc. Prof. Dr. Shahid Mukhtar",
    specialization: "Neurology",
    city: "Lahore",
    rating: 4.6,
    experience: 15,
    image: "assets/images/doctor19.jpg",
    fees: 2000,
    availability: ["10:00", "12:00", "15:00", "17:00", "19:00"],
    education: "M.B.B.S., F.C.P.S. (Neurology)",
    languages: ["English", "Urdu"],
    consultationType: "Farooq Hospital",
    waitTime: "15 - 30 Min",
    satisfactionRate: "96% (3395)",
    subspecialty: "Neurologist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Tariq Sheikh",
            rating: 5,
            comment: "Prof. Dr. Mukhtar has extensive experience in neurology and provides excellent care.",
            date: "2024-02-13"
        }
    ]
},
{
    id: 20,
    name: "Dr. Naveed Javed",
    specialization: "Neurology",
    city: "Islamabad",
    rating: 4.4,
    experience: 18,
    image: "assets/images/doctor20.jpg",
    fees: 4000,
    availability: ["08:00", "10:00", "13:00", "15:00", "17:00"],
    education: "MBChB (UK), MD (Neuro - Medicine) USA, MRCPsych UK, PhD (Oxford)",
    languages: ["English", "Urdu"],
    consultationType: "Saeed International Hospital",
    waitTime: "Under 15 Min",
    satisfactionRate: "94% (1162)",
    subspecialty: "Neurologist, Psychiatrist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211286.6789123456!2d73.04329!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Amjad Ali",
            rating: 5,
            comment: "Dr. Javed has international qualifications and provides excellent neurological care.",
            date: "2024-02-14"
        }
    ]
},
{
    id: 21,
    name: "Col. (R) Dr. Zahid Rustam",
    specialization: "Neurology",
    city: "Islamabad",
    rating: 4.8,
    experience: 25,
    image: "assets/images/doctor21.jpg",
    fees: 2500,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "MBBS, FCPS Physical medicine & rehabilitation",
    languages: ["English", "Urdu"],
    consultationType: "Islamabad Medical Center",
    waitTime: "Under 15 Min",
    satisfactionRate: "98% (2369)",
    subspecialty: "Neurologist, Rehab Medicine, Pain Management Specialist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211286.6789123456!2d73.04329!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Farhan Khan",
            rating: 5,
            comment: "Col. Dr. Rustam is excellent in pain management and rehabilitation.",
            date: "2024-02-15"
        }
    ]
},

// Pediatricians
{
    id: 22,
    name: "Assist. Prof. Dr. Javaid Iqbal",
    specialization: "Pediatrics",
    city: "Karachi",
    rating: 4.7,
    experience: 12,
    image: "assets/images/doctor22.jpg",
    fees: 1800,
    availability: ["08:00", "10:00", "13:00", "15:00", "17:00"],
    education: "MBBS, FCPS (Pediatric), FCPS (Neonatology)",
    languages: ["English", "Urdu"],
    consultationType: "Mamji Hospital",
    waitTime: "15 - 30 Min",
    satisfactionRate: "97% (295)",
    subspecialty: "Neonatologist, Pediatrician",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Sobia Ahmad",
            rating: 5,
            comment: "Dr. Iqbal is excellent with children and provides comprehensive pediatric care.",
            date: "2024-02-16"
        }
    ]
},
{
    id: 23,
    name: "Dr. S. Sana Abbas",
    specialization: "Pediatrics",
    city: "Karachi",
    rating: 3.8,
    experience: 5,
    image: "assets/images/doctor23.jpg",
    fees: 1800,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "MBBS, FCPS (Pediatrics)",
    languages: ["English", "Urdu"],
    consultationType: "Saifee Hospital",
    waitTime: "15 - 30 Min",
    satisfactionRate: "75% (3)",
    subspecialty: "Pediatrician",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Naseem Shah",
            rating: 4,
            comment: "Dr. Abbas is caring and provides good pediatric care.",
            date: "2024-02-17"
        }
    ]
},
{
    id: 24,
    name: "Dr. Surriya Jabeen",
    specialization: "Pediatrics",
    city: "Lahore",
    rating: 4.9,
    experience: 30,
    image: "assets/images/doctor24.jpg",
    fees: 3000,
    availability: ["08:30", "10:30", "13:30", "15:30", "17:30"],
    education: "M.B.B.S., F.C.P.S. (Pediatrics), M.C.P.S (Pediatrics)",
    languages: ["English", "Urdu"],
    consultationType: "Iqra Medical Complex",
    waitTime: "15 - 30 Min",
    satisfactionRate: "99% (191)",
    subspecialty: "Pediatrician",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Farah Malik",
            rating: 5,
            comment: "Dr. Jabeen has vast experience in pediatrics and is excellent with children.",
            date: "2024-02-18"
        }
    ]
},
{
    id: 25,
    name: "Dr. Saadia Sharif",
    specialization: "Pediatrics",
    city: "Lahore",
    rating: 4.5,
    experience: 18,
    image: "assets/images/doctor25.jpg",
    fees: 4000,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "M.B.B.S, FRCPCH (UK), MRCPCH (Paeds), F.C.P.S (Paeds)",
    languages: ["English", "Urdu"],
    consultationType: "Fatima Memorial Hospital",
    waitTime: "15 - 30 Min",
    satisfactionRate: "95% (144)",
    subspecialty: "Pediatrician, Asthma Specialist, Neonatologist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Mariam Ali",
            rating: 5,
            comment: "Dr. Sharif has international qualifications and provides excellent pediatric care.",
            date: "2024-02-19"
        }
    ]
},
{
    id: 26,
    name: "Dr. Imrana Salahuddin",
    specialization: "Pediatrics",
    city: "Islamabad",
    rating: 2.5,
    experience: 30,
    image: "assets/images/doctor26.jpg",
    fees: 3000,
    availability: ["08:00", "10:00", "13:00", "15:00", "17:00"],
    education: "MBBS, MCPS (Pediatrics), MRCGP (Int) RCGP UK, MCPS (Family Medicine)",
    languages: ["English", "Urdu"],
    consultationType: "MedCity International Hospital",
    waitTime: "15 - 30 Min",
    satisfactionRate: "50% (3)",
    subspecialty: "Pediatrician, Lifestyle Medicine Physician, Consultant Physician",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211286.6789123456!2d73.04329!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Zubair Khan",
            rating: 3,
            comment: "Dr. Salahuddin has vast experience but needs improvement in patient care.",
            date: "2024-02-20"
        }
    ]
},
{
    id: 27,
    name: "Dr. Maliha Akhtar Qureshi",
    specialization: "Pediatrics",
    city: "Islamabad",
    rating: 4.6,
    experience: 30,
    image: "assets/images/doctor27.jpg",
    fees: 2500,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "MBBS, FCPS (Pediatrics)",
    languages: ["English", "Urdu"],
    consultationType: "Islamabad Specialists Clinic",
    waitTime: "Under 15 Min",
    satisfactionRate: "96% (95)",
    subspecialty: "Pediatrician",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211286.6789123456!2d73.04329!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Sameera Iqbal",
            rating: 5,
            comment: "Dr. Qureshi is highly experienced and provides excellent pediatric care.",
            date: "2024-02-21"
        }
    ]
},

// Dentists
{
    id: 28,
    name: "Dr. Lareb Khattak",
    specialization: "Dentistry",
    city: "Karachi",
    rating: 4.7,
    experience: 3,
    image: "assets/images/doctor28.jpg",
    fees: 3000,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "BDS, RDS",
    languages: ["English", "Urdu"],
    consultationType: "Altamash Dental Clinic",
    waitTime: "Under 15 Min",
    satisfactionRate: "97% (68)",
    subspecialty: "Dentist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Adnan Sheikh",
            rating: 5,
            comment: "Dr. Khattak provides excellent dental care and is very professional.",
            date: "2024-02-22"
        }
    ]
},
{
    id: 29,
    name: "Dr. Zeeshan Faiz",
    specialization: "Dentistry",
    city: "Karachi",
    rating: 4.9,
    experience: 21,
    image: "assets/images/doctor29.jpg",
    fees: 1000,
    availability: ["08:00", "10:00", "13:00", "15:00", "17:00"],
    education: "B.D.S., post Graduation In Clinical Dental Sciences (UK,London)",
    languages: ["English", "Urdu"],
    consultationType: "Faiz Dental Clinic",
    waitTime: "Under 15 Min",
    satisfactionRate: "99% (366)",
    subspecialty: "Dentist, Periodontist, Implantologist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.2013885799!2d67.00110!3d24.860966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Saima Raza",
            rating: 5,
            comment: "Dr. Faiz has international qualifications and provides excellent dental treatments.",
            date: "2024-02-23"
        }
    ]
},
{
    id: 30,
    name: "Dr. Hamza Jawed",
    specialization: "Dentistry",
    city: "Lahore",
    rating: 4.1,
    experience: 6,
    image: "assets/images/doctor30.jpg",
    fees: 2000,
    availability: ["10:00", "12:00", "15:00", "17:00", "19:00"],
    education: "BDS, FCPS (Oral And Maxillo-facial Surgery)",
    languages: ["English", "Urdu"],
    consultationType: "Dental Avenue Hospital",
    waitTime: "45 - 60 Min",
    satisfactionRate: "83% (64)",
    subspecialty: "Oral and Maxillofacial Surgeon, Dentist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Taimur Khan",
            rating: 4,
            comment: "Dr. Jawed is skilled in oral surgery but wait times can be long.",
            date: "2024-02-24"
        }
    ]
},
{
    id: 31,
    name: "Dr. Aleena Chaudhary",
    specialization: "Dentistry",
    city: "Lahore",
    rating: 5.0,
    experience: 14,
    image: "assets/images/doctor31.jpg",
    fees: 2000,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "BDS, NBDE (USA)",
    languages: ["English", "Urdu"],
    consultationType: "House of Dentistry",
    waitTime: "Under 15 Min",
    satisfactionRate: "100% (29)",
    subspecialty: "Dentist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d74.00472!3d31.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Fawad Ali",
            rating: 5,
            comment: "Dr. Chaudhary has US qualifications and provides excellent dental care.",
            date: "2024-02-25"
        }
    ]
},
{
    id: 32,
    name: "Dr. Zain Ahmad Qureshi",
    specialization: "Dentistry",
    city: "Islamabad",
    rating: 4.8,
    experience: 8,
    image: "assets/images/doctor32.jpg",
    fees: 2000,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "B.D.S.",
    languages: ["English", "Urdu"],
    consultationType: "Z Care Dental Experts",
    waitTime: "Under 15 Min",
    satisfactionRate: "N/A",
    subspecialty: "Dentist, Cosmetic Dentist, Oral and Maxillofacial Surgeon",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d73.00472!3d33.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Ahmed Hassan",
            rating: 5,
            comment: "Excellent cosmetic dentistry services with modern techniques.",
            date: "2024-02-20"
        }
    ]
},
{
    id: 33,
    name: "Dr. Ayesha Khan",
    specialization: "Dentistry",
    city: "Islamabad",
    rating: 5.0,
    experience: 15,
    image: "assets/images/doctor33.jpg",
    fees: 2000,
    availability: ["09:00", "11:00", "14:00", "16:00", "18:00"],
    education: "BDS, RDS, C-Endo, C-Ortho, C-Implants, AST in Periodentology",
    languages: ["English", "Urdu"],
    consultationType: "Dental Art & Science",
    waitTime: "Under 15 Min",
    satisfactionRate: "100% (1009)",
    subspecialty: "Dentist, Restorative Dentist, Cosmetic Dentist, Implantologist",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241297!2d73.00472!3d33.558401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    testimonials: [
        {
            name: "Fatima Sheikh",
            rating: 5,
            comment: "Dr. Khan is highly skilled in implantology and restorative dentistry.",
            date: "2024-02-18"
        }
    ]
},
];

// Export the data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = doctorsData;
    // Make it available globally
window.doctorsData = doctorsData;
}