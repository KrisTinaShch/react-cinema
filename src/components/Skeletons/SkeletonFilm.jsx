import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonFilms = (props) => (
    <ContentLoader
        speed={1.5}
        width={130}
        height={200}
        viewBox="0 0 130 200"
        backgroundColor="#919191"
        foregroundColor="#b5b5b5"
        {...props}
    >
        <rect x="86" y="67" rx="0" ry="0" width="4" height="3" />
        <rect x="0" y="0" rx="10" ry="10" width="130" height="200" />
    </ContentLoader>
)

export default SkeletonFilms

