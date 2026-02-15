import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fortune500Projects from "@/components/Fortune500Projects";
import { Helmet } from "react-helmet-async";

const WorkExperience = () => {

    const list_style =
        "relative before:absolute before:w-1.5 before:h-1.5 before:top-1 before:left-0 before:bg-primary before:rounded-full pl-4";

    // ✅ SAFE INITIAL STATE
    const [positions, setPositions] = useState({
        page_title: "",
        position_data: []
    });

    const [activePosition, setActivePosition] = useState("");

    // ---------------- FETCH DATA ----------------
    useEffect(() => {
        fetch("/data/workExperience.json")
            .then((res) => res.json())
            .then((json) => {
                setPositions(json);

                // ✅ set first active AFTER data loads
                if (json.position_data?.length) {
                    setActivePosition(json.position_data[0].id);
                }
            })
            .catch(console.error);
    }, []);

    // ---------------- INTERSECTION OBSERVER ----------------
    useEffect(() => {
        if (!positions.position_data.length) return;

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActivePosition(entry.target.id);
                }
            });
        }, observerOptions);

        positions.position_data.forEach((position) => {
            const element = document.getElementById(position.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [positions]); // ✅ runs after data loads

    // loading guard
    if (!positions.position_data.length) return null;

    // -------------------------------------------------------

    return (
        <>
            <Helmet>
                <title>{positions.page_title} | Abhishek Misra</title>
                <meta
                    name="description"
                    content="Technical Product & Program Management Leader with 15+ years of expertise in AI Product Management, GenAI, LLMs, and Fortune 500 digital transformations."
                />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />

                {/* PAGE TITLE */}
                <section className="bg-[#f4f4f4] pt-32 pb-12">
                    <div className="container">
                        <h1 className="text-black text-3xl md:text-4xl font-bold">
                            {positions.page_title}
                        </h1>
                    </div>
                </section>

                {/* MAIN CONTENT */}
                <section className="py-16">
                    <div className="container">
                        <div className="grid md:grid-cols-[300px_1fr] gap-12">

                            {/* LEFT SIDEBAR */}
                            <div className="md:sticky md:top-28 md:self-start hidden md:block">
                                <h3 className="text-primary text-xl font-bold mb-6">
                                    Positions
                                </h3>

                                <ul className="space-y-6">
                                    {positions.position_data.map((position) => (
                                        <li key={position.id}>
                                            <button
                                                onClick={() => {
                                                    setActivePosition(position.id);
                                                    document
                                                        .getElementById(position.id)
                                                        ?.scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "start"
                                                        });
                                                }}
                                                className={`text-sm lg:text-base text-left w-full transition-colors ${activePosition === position.id
                                                        ? "text-primary font-bold"
                                                        : "text-muted-foreground hover:text-foreground"
                                                    }`}
                                            >
                                                {position.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div>
                                <h3 className="text-primary text-xl font-bold mb-8">
                                    Roles & Responsibilities
                                </h3>

                                <div className="space-y-12">
                                    {positions.position_data.map((job) => (
                                        <div
                                            id={job.id}
                                            key={job.id}
                                            className="shadow-[0_4px_12px_0_rgba(0,0,0,0.078)] p-6 scroll-mt-32 rounded-xl"
                                        >
                                            {/* HEADER */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <img
                                                    src={job.logo}
                                                    alt={job.company}
                                                    className="object-contain"
                                                />
                                                <h3 className="text-xl font-semibold text-primary">
                                                    {job.company}
                                                </h3>
                                            </div>

                                            <hr className="bg-[#ECECF1] my-6" />

                                            <h4 className="text-base font-bold text-black mb-4">
                                                {job.title}
                                            </h4>

                                            <div className="text-sm text-muted-foreground">

                                                {job.intro && (
                                                    <p className="mb-3">{job.intro}</p>
                                                )}

                                                <ul className="space-y-3">
                                                    {job.responsibilities?.map((point, i) => (
                                                        <li key={i} className={list_style}>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Fortune500Projects />
                <Footer />
            </div>
        </>
    );
};

export default WorkExperience;
