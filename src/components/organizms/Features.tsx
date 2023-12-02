import {BeerCard, EventCard, MenuCard, TinctureCard} from "@components/molecules";
import {BoardGamesCard} from "@components/molecules/BoardGamesCard.tsx";
import styled from "styled-components";
import {Block} from "@components/atoms";
import {useMobile} from "@utils/useMobile.ts";

interface IFeaturesGridProps {
    isMobile: boolean
}

const FeaturesGrid = styled.div<IFeaturesGridProps>(({isMobile}: IFeaturesGridProps) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gridTemplateRows: isMobile ? '1fr' :'1fr 1fr' ,
    gap: '20px',
    paddingBottom: '20px',
}))
export const Features = () => {
    const isMobile = useMobile()
    return <Block>
        <FeaturesGrid isMobile={isMobile}>
            <EventCard/>
            <MenuCard/>
            <BeerCard/>
            <TinctureCard/>
        </FeaturesGrid>
        <BoardGamesCard/>
    </Block>
}
