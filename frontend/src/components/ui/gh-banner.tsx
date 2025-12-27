

type positionVariant = "left-top" | "right-top" | "left-bottom" | "right-bottom"

export default function GHBanner({hideBanner, position, fixed} : { hideBanner?: boolean | null, position: positionVariant, fixed?: boolean | null}){

    return  hideBanner ? null : (
        <a
          className={`github-fork-ribbon ${position} ${fixed ? "fixed" : null}`}
          href="https://github.com/jeremejazz/resto-finder-v2"
          data-ribbon="Fork me on GitHub"
          title="Fork me on GitHub"
        >
          Fork me on GitHub
        </a>
      );

}