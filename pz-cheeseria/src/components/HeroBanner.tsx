import '../styles/hero-banner.scss'

/**
 * HeroBanner Component
 *
 * This component renders a hero banner to use on any page.
 * If there is no tagline passed in it won't render at all.
 */
export default function HeroBanner({heading, tagline} : {heading: string, tagline?: string}) {
    return (
        <section className="hero-banner wrapper">
            {/* If I had more time I'd like to make this nicer looking - with a nice background image and overlay */}
            <div className="inner-content container">
                <h1>{heading ?? "Welcome to PZ Cheeseria"}</h1>
                {tagline && tagline !== "" && <p>{tagline}</p>}
            </div>
        </section>
    )
}