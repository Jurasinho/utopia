<template>
    <header>
        <power-points :value="powerPoints"></power-points>
        <flex-box direction="column" class="border-left pl-5 ml-6 income">
            <money-label>{{$t('income')}}:</money-label>
            <money-value>{{income | currency}}</money-value>
        </flex-box>
        <flex-box direction="column" class="border-left pl-5 expenditure">
            <money-label>{{$t('expenditure')}}:</money-label>
            <money-value>{{expenditure | currency }}</money-value>
        </flex-box>
        <next-button>
            <icon-next width="20"></icon-next>
            <p>NEXT</p>
        </next-button>
    </header>
</template>

<script>
    import styled from 'vue-styled-components';

    const moneyLabel = styled.p`
        font-size: 16px;
        line-height: 20px;
        font-family: Helvetica, sans-serif;
        color: #757575;
        margin: 0;
        padding: 0;
`;
    const moneyValue = styled.p`
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
        font-family: Helvetica, sans-serif;
        color: #000000;
        margin: 0;
        padding: 0;

`;
    const nextButton = styled.button`
        height: 100%;
        width: 60px;
        cursor: pointer;
        margin-left: auto;
        border: none;
        outline: none;
        background-color: #0b82d6;
        transition: background-color 120ms ease-in-out;

        &:active {
            background-color: #0b9bf6;

            svg {
                transform: translateY(1px);
            }
        }

        p {
            margin: 4px 0 0 0;
            padding: 0;
            color: white;
        }
`;
    import { mapState} from "vuex";

    export default {
        components: { moneyLabel, moneyValue, nextButton },
        computed: {
            ...mapState(['income', 'expenditure', 'powerPoints'])
        }
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        align-items: center;
        margin: 0 auto;
        width: calc(100% - 30px);
        height: 64px;
        box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.3);
        border: 1px solid #767676;
        border-top: none;
        border-radius: 0 0 8px 8px;
        background-color: #eeeeee;
        overflow: hidden;
    }

    .power {
        margin-left: 8px;
    }

    .border-left {
        border-left: 1px solid #767676;
    }

    .income, .expenditure {
        width: 180px;
    }
</style>
