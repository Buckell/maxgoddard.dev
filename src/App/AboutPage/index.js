import React from "react";
import Container from "./Container";
import Footer from "../Footer";
import FlipImage from "../../components/FlipImage";
import PageContainer from "../PageContainer";

export default function AboutPage() {
    return (
        <PageContainer>
            <Container>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <FlipImage />
                </div>

                <h1>Max Goddard</h1>

                <p>
                    More about me...
                </p>

                <Footer />
            </Container>
        </PageContainer>
    );
}