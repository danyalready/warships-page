interface Props {
    size?: string | number | undefined;
}

export default function CloseIcon({ size = 24 }: Props) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.435 10.6066L21.2132 18.3848L18.3848 21.2132L10.6066 13.435L2.82843 21.2132L7.62939e-06 18.3848L7.77818 10.6066L0 2.82843L2.82843 0L10.6066 7.77818L18.3848 0L21.2132 2.82843L13.435 10.6066Z"
                fill="currentColor"
            />
        </svg>
    );
}
