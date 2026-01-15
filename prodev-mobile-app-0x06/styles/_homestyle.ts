import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* =========================
     SCREEN CONTAINER
  ========================= */
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  /* =========================
     SEARCH BAR SECTION
  ========================= */
  searchGroup: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#34967C",
    paddingHorizontal: 16,
  },

  searchFormGroup: {
    backgroundColor: "white",
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#555",
    marginBottom: 2,
  },

  searchControl: {
    fontSize: 14,
    color: "red",
  },

  searchButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  /* =========================
     FILTERS SECTION
  ========================= */
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 20,
  },

  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },

  filterText: {
    fontSize: 12,
    marginTop: 6,
    color: "#333",
  },

  /* =========================
     PROPERTY LISTINGS
  ========================= */
  listingContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  /* =========================
     PAGINATION / SHOW MORE
  ========================= */
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
  },

  showMoreButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});

export { styles };
