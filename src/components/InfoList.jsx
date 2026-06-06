// Components;
import InfoBox from "./InfoBox";

export default function InfoList({ mangaDetails }) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <InfoBox title="Type" value={mangaDetails?.type} />

      <InfoBox title="Status" value={mangaDetails?.status} />

      <InfoBox title="Chapters" value={mangaDetails?.chapters ?? "N/A"} />

      <InfoBox title="Volumes" value={mangaDetails?.volumes ?? "N/A"} />

      <InfoBox title="Published" value={mangaDetails?.published?.string} />

      <InfoBox title="Members" value={mangaDetails?.members} />

      <InfoBox
        title="Authors"
        value={
          mangaDetails?.authors?.length
            ? mangaDetails.authors.map((a) => a.name).join(", ")
            : "N/A"
        }
      />

      <InfoBox
        title="Serialization"
        value={
          mangaDetails?.serializations?.length
            ? mangaDetails.serializations.map((s) => s.name).join(", ")
            : "N/A"
        }
      />
    </div>
  );
}
