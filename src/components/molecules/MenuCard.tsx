import {FeatureCard} from "@components/atoms";
import url from '@assets/menu.jpg'

export const MenuCard = () => <FeatureCard
    title='АССОРТИМЕНТ ЕДЫ И НАПИТКОВ'
    subtitle={
        <>
            С удовольствием порадуем вас нашими напитками и закусками<br/><br/>
            <a onClick={() => alert('Инзвините, но меню всё ещё находится в разработке. Пока вы можете получить больше информации в нашем телеграм-канале. Будем рады видеть вас у нас в гостях :)')}>
                СМОТРЕТЬ МЕНЮ
            </a>
        </>
    }
    imgSrc={url}
/>
