import {FeatureCard} from "@components/atoms";
import url from '@assets/tincture.jpg'

export interface IBearCardProps {
    minPrice?: number;
}
export const TinctureCard = ({minPrice}: IBearCardProps) => <FeatureCard
    title='🥛ДОМАШНИЕ НАСТОЙКИ🥃'
    subtitle={`от ${minPrice || '- '}֏`}
    imgSrc={url}
/>
